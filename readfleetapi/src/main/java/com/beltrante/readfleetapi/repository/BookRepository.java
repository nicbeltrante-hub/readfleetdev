package com.beltrante.readfleetapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beltrante.readfleetapi.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
