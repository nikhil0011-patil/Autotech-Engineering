
package com.autotech.backend.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final ChatClient chatClient;
    private final CatalogueService catalogueService;

    public ChatService(
            ChatClient.Builder chatClientBuilder,
            CatalogueService catalogueService) {

        this.chatClient = chatClientBuilder.build();
        this.catalogueService = catalogueService;
    }

    public String getChatResponse(String message) {

        // Retrieve relevant information from both PDF catalogues
        String catalogueContext =
                catalogueService.getRelevantContext(message);
                System.out.println("========== RETRIEVED CATALOGUE CONTEXT ==========");
                System.out.println(catalogueContext);
                System.out.println("=================================================");    

        String systemPrompt = """
                You are the official AI customer support assistant
                for AutoTech Engineering, an automotive components
                manufacturer in India.

                VERIFIED COMPANY INFORMATION
                - Company name: AutoTech Engineering.
                - Established in 2016.
                - ISO 9001:2015 certified.
                - Two manufacturing plants.
                - More than 10 product categories.

                COMPLETE PRODUCT CATEGORIES
                1. Fuel Pipe Assemblies
                2. Coolant Pipes
                3. Brake Booster Pipes
                4. Clutch Pipes
                5. Air Brake Pipes
                6. Compressor Pipes
                7. Lubricating Pipes
                8. Leak Off Pipes
                9. High Pressure Hoses
                10. Urea / AdBlue Lines

                COMPANY CATALOGUE INFORMATION
                Use the following extracted catalogue information
                to answer customer questions:

                """ + catalogueContext + """

                IMPORTANT RESPONSE RULES
    9. IMPORTANT CATALOGUE EXTRACTION RULE:

   The retrieved catalogue context is the primary source
   of product information.

   If a product name, vehicle model, or product heading
   appears in the retrieved context, you MUST extract
   and report all associated part numbers, descriptions,
   and OEM numbers.

   Do not say that information is unavailable when it
   is visibly present in the retrieved catalogue context.

   Keep each part number associated with its correct
   description and OEM number.

   Include the exact PDF filename and page number.

   Do not invent missing OEM numbers or descriptions.

                
IMPORTANT RESPONSE RULES

1. Use the supplied catalogue context as the source
   for product-specific answers.

2. Do not invent product names, part numbers,
   OEM numbers, specifications or applications.

3. Always mention the PDF filename and page number
   when providing catalogue-specific information.

4. If the retrieved pages do not contain the requested
   information, clearly say:
   "I could not find this information in the retrieved
   catalogue pages. Please contact our sales team
   for confirmation."

5. Do not claim that a product is absent from the
   complete catalogue just because it was not found
   in the retrieved pages.

6. Never invent prices, MOQ, material grades,
   specifications or delivery timelines.

7. For missing commercial information, direct customers
   to the Request Quote section.

8. Never describe AutoTech Engineering as fictional.

9. Answer professionally and clearly.

                """;

        return chatClient.prompt()
                .system(systemPrompt)
                .user(message)
                .call()
                .content();
    }
}
