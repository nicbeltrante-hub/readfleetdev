package com.beltrante.readfleetapi.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "books")
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String genre;
    private Integer totalPages;
    private Integer pagesRead;
    @Enumerated(EnumType.STRING)
    private ReadStatus status;

    private String coverColor;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer rating;

}