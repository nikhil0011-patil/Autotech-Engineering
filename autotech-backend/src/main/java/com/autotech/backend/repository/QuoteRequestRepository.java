package com.autotech.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autotech.backend.entity.QuoteRequest;

@Repository
public interface QuoteRequestRepository extends JpaRepository<QuoteRequest, Long> {

}