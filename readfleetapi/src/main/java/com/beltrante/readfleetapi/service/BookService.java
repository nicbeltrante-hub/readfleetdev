package com.beltrante.readfleetapi.service;

import com.beltrante.readfleetapi.dto.BookRequest;
import com.beltrante.readfleetapi.dto.BookUpdateRequest;
import com.beltrante.readfleetapi.model.Book;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    Book addBook(BookRequest request);
    Book updateBook(Long id, BookUpdateRequest request);

}