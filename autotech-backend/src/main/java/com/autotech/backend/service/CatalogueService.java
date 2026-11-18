
package com.autotech.backend.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Pattern;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class CatalogueService {

    private final List<CataloguePage> cataloguePages = new ArrayList<>();

    private static final int MAX_RESULTS = 10;

    private static final Set<String> STOP_WORDS = Set.of(
            "what", "which", "where", "when", "who", "how",
            "the", "is", "are", "was", "were", "for", "from",
            "with", "and", "or", "in", "on", "of", "to",
            "a", "an", "do", "does", "can", "could",
            "our", "your", "please", "tell", "me",
            "give", "show", "find", "list", "about",
            "catalogue", "catalog", "product", "products"
    );

    private record CataloguePage(
            String source,
            int pageNumber,
            String text) {
    }

    @PostConstruct
    public void loadCatalogues() {

        cataloguePages.clear();

        loadPdf("catalogues/product-catalogue.pdf");
        loadPdf("catalogues/TATA LCV CATALOGUE.pdf");

        System.out.println("==================================");
        System.out.println("CATALOGUE LOADING COMPLETED");
        System.out.println("Total catalogue pages loaded: "
                + cataloguePages.size());
        System.out.println("==================================");
    }

    private void loadPdf(String filePath) {

        try {
            ClassPathResource resource =
                    new ClassPathResource(filePath);

            try (var input = resource.getInputStream();
                 PDDocument document =
                         Loader.loadPDF(input.readAllBytes())) {

                PDFTextStripper stripper = new PDFTextStripper();

                int loadedPages = 0;

                for (int page = 1;
                     page <= document.getNumberOfPages();
                     page++) {

                    stripper.setStartPage(page);
                    stripper.setEndPage(page);

                    String text = stripper.getText(document).trim();

                    if (!text.isEmpty()) {

                        cataloguePages.add(
                                new CataloguePage(
                                        filePath,
                                        page,
                                        text
                                )
                        );

                        loadedPages++;
                    }
                }

                System.out.println(
                        "Loaded catalogue: " + filePath
                        + " | Pages: " + loadedPages
                );
            }

        } catch (IOException e) {

            System.err.println(
                    "Could not load catalogue: " + filePath
            );

            e.printStackTrace();
        }
    }

    
public String getRelevantContext(String question) {

    if (question == null || question.isBlank()) {
        return "No search question was provided.";
    }

    String normalizedQuery = normalize(question);
    Set<String> queryTerms = tokenize(question);

    if (queryTerms.isEmpty()) {
        return "Please provide a product name, category, "
                + "part number or OEM reference.";
    }

    // Identify the requested vehicle model.
    String requestedModel = extractRequestedVehicleModel(
            normalizedQuery
    );

    List<ScoredPage> relevantPages = new ArrayList<>();

    for (CataloguePage page : cataloguePages) {

        String normalizedContent = normalize(page.text());

        // STRICT VEHICLE MODEL FILTER
if (requestedModel != null
        && !matchesRequestedVehicleModel(
                normalizedContent, requestedModel)) {
    continue;
}

// If the user specifically requests the TATA LCV catalogue,
// do not retrieve pages from the general product catalogue.
String sourceName = page.source().toLowerCase(Locale.ROOT);

if (normalizedQuery.contains("tata lcv")
        && !sourceName.contains("tata lcv catalogue")) {
    continue;
}

        Set<String> pageTerms = tokenize(page.text());

        int score = 0;
        int matchedTerms = 0;

        for (String term : queryTerms) {

            if (pageTerms.contains(term)) {

                matchedTerms++;

                int frequency = countOccurrences(
                        pageTerms, term, page.text()
                );

                score += Math.min(frequency, 3);
            }
        }

        score += matchedTerms * 2;

        String phrase = normalizedQuery.trim();

        if (phrase.length() > 3
                && normalizedContent.contains(phrase)) {
            score += 10;
        }

        String source = page.source().toLowerCase(Locale.ROOT);

        if (normalizedQuery.contains("tata")
                && source.contains("tata")) {
            score += 8;
        }

        if (normalizedQuery.contains("product catalogue")
                && source.contains("product-catalogue")) {
            score += 8;
        }

        if (normalizedQuery.contains("lcv")
                && source.contains("tata")) {
            score += 5;
        }

        if (score > 0) {
            relevantPages.add(
                    new ScoredPage(page, score)
            );
        }
    }

    if (relevantPages.isEmpty()) {

        return requestedModel != null
                ? "No pages matching the exact vehicle model '"
                    + requestedModel.toUpperCase(Locale.ROOT)
                    + "' were found in the retrieved catalogues. "
                    + "Do not substitute another vehicle model."
                : "No relevant matching pages were found "
                    + "in the uploaded catalogues.";
    }

    relevantPages.sort(
            Comparator.comparingInt(ScoredPage::score)
                    .reversed()
    );

    List<String> topPages = relevantPages.stream()
            .limit(MAX_RESULTS)
            .map(result -> {

                CataloguePage page = result.page();

                return "Source: " + page.source()
                        + "\nPage: " + page.pageNumber()
                        + "\nRelevance score: " + result.score()
                        + "\n" + page.text();
            })
            .toList();

    return """
            The following pages were retrieved from the
            company's uploaded PDF catalogues.

            Use only these pages as supporting evidence.
            Mention the exact source filename and page number.

            Do not mix products from different vehicle models.
            Do not invent missing part numbers or OEM references.

            """ + String.join(
                    "\n\n--------------------\n\n",
                    topPages
            );
}


    private record ScoredPage(
            CataloguePage page,
            int score) {
    }

    private String normalize(String text) {

        return text.toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9]+", " ")
                .trim();
    }

    private Set<String> tokenize(String text) {

        Set<String> terms = new HashSet<>();

        for (String word : normalize(text).split("\\s+")) {

            if (word.isBlank() || STOP_WORDS.contains(word)) {
                continue;
            }

            // Basic singular matching:
            // pipes -> pipe, assemblies -> assembly
            if (word.endsWith("ies") && word.length() > 4) {
                word = word.substring(0, word.length() - 3) + "y";
            } else if (word.endsWith("s")
                    && word.length() > 3
                    && !word.endsWith("ss")) {
                word = word.substring(0, word.length() - 1);
            }

            terms.add(word);
        }

        return terms;
    }

    private int countOccurrences(
            Set<String> pageTerms,
            String term,
            String pageText) {

        // A matching term gets at least one point.
        // Additional frequency scoring is capped at three.
        String normalized = normalize(pageText);

        int count = 0;

        for (String word : normalized.split("\\s+")) {

            String normalizedWord = word;

            if (normalizedWord.endsWith("ies")
                    && normalizedWord.length() > 4) {
                normalizedWord =
                        normalizedWord.substring(0,
                                normalizedWord.length() - 3) + "y";
            } else if (normalizedWord.endsWith("s")
                    && normalizedWord.length() > 3
                    && !normalizedWord.endsWith("ss")) {
                normalizedWord =
                        normalizedWord.substring(0,
                                normalizedWord.length() - 1);
            }

            if (normalizedWord.equals(term)) {
                count++;
            }
        }

        return Math.max(1, count);
    }

    public int getTotalPagesLoaded() {
        return cataloguePages.size();
    }
    
private String extractRequestedVehicleModel(String query) {

    // Check longer model variants first.
    List<String> knownModels = List.of(
            "tata ace mega dicor",
            "tata ace mega"
    );

    for (String model : knownModels) {
        if (query.contains(model)) {
            return model;
        }
    }

    return null;
}

private boolean matchesRequestedVehicleModel(
        String pageContent,
        String requestedModel) {

    String paddedContent = " " + pageContent + " ";

    // Exact model must be present.
    String paddedModel = " " + requestedModel + " ";

    if (!paddedContent.contains(paddedModel)) {
        return false;
    }

    // Exclude longer or different vehicle variants.
    if (requestedModel.equals("tata ace mega")) {

        if (paddedContent.contains(" tata ace mega dicor ")
                || paddedContent.contains(" tata ace mega xl ")
                || paddedContent.contains(" tata ace mega xl bs6 ")) {
            return false;
        }
    }

    return true;
}

}
