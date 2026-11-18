package com.autotech.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.autotech.backend.entity.QuoteRequest;
import com.autotech.backend.service.QuoteRequestService;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:8081")
public class QuoteRequestController {

    private final QuoteRequestService quoteRequestService;

    public QuoteRequestController(QuoteRequestService quoteRequestService) {
        this.quoteRequestService = quoteRequestService;
    }

    // Create a new quote request
    @PostMapping
    public ResponseEntity<QuoteRequest> createQuoteRequest(
            @RequestBody QuoteRequest quoteRequest) {

        QuoteRequest savedQuote =
                quoteRequestService.saveQuoteRequest(quoteRequest);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedQuote);
    }

    // Get all quote requests
    @GetMapping
    public ResponseEntity<List<QuoteRequest>> getAllQuoteRequests() {

        return ResponseEntity.ok(
                quoteRequestService.getAllQuoteRequests()
        );
    }

    // Get quote request by ID
    @GetMapping("/{id}")
    public ResponseEntity<QuoteRequest> getQuoteRequestById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                quoteRequestService.getQuoteRequestById(id)
        );
    }
}