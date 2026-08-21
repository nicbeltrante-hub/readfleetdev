package com.beltrante.readfleetapi.dto;

import com.beltrante.readfleetapi.model.ReadStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class BookRequest {
    @NotBlank(message = "Title cannot be empty")
    private String title;
    private String author;
    private String genre;
    @Positive(message = "Page count must be positive.")
    private Integer totalPages;
    private ReadStatus status;
}
