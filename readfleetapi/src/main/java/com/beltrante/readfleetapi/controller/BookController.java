package com.beltrante.readfleetapi.controller;

import java.util.List;

import com.beltrante.readfleetapi.dto.BookRequest;
import com.beltrante.readfleetapi.dto.BookUpdateRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.beltrante.readfleetapi.model.Book;
import com.beltrante.readfleetapi.repository.BookRepository;
import com.beltrante.readfleetapi.service.BookService;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/getBooks")
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/addBook")
    public ResponseEntity<Book> addBook(@Valid @RequestBody BookRequest request) {
        Book savedBook = bookService.addBook(request);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @PutMapping("/updateBook/{id}")
    public ResponseEntity<Book> updateBook(
            @PathVariable Long id,
            @Valid @RequestBody BookUpdateRequest request) {
        Book updatedBook = bookService.updateBook(id, request);
        return new ResponseEntity<>(updatedBook, HttpStatus.OK);
    }

}