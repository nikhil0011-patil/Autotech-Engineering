package com.autotech.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.autotech.backend.entity.QuoteRequest;
import com.autotech.backend.repository.QuoteRequestRepository;

@Service
public class QuoteRequestService {

    private final QuoteRequestRepository quoteRequestRepository;

    public QuoteRequestService(QuoteRequestRepository quoteRequestRepository) {
        this.quoteRequestRepository = quoteRequestRepository;
    }

    // Save a new quote request
    public QuoteRequest saveQuoteRequest(QuoteRequest quoteRequest) {
        return quoteRequestRepository.save(quoteRequest);
    }

    // Get all quote requests
    public List<QuoteRequest> getAllQuoteRequests() {
        return quoteRequestRepository.findAll();
    }

    // Get one quote request by ID
    public QuoteRequest getQuoteRequestById(Long id) {
        return quoteRequestRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Quote request not found with id: " + id));
    }
}