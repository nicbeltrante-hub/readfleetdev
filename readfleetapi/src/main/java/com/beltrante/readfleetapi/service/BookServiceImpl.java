package com.beltrante.readfleetapi.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.beltrante.readfleetapi.dto.BookRequest;
import com.beltrante.readfleetapi.dto.BookUpdateRequest;
import com.beltrante.readfleetapi.model.Book;
import com.beltrante.readfleetapi.model.ReadStatus;
import com.beltrante.readfleetapi.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    @Transactional
    public Book addBook(BookRequest request) {
        Book book = new Book();
        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setGenre(request.getGenre());
        book.setTotalPages(request.getTotalPages());
        book.setStatus(request.getStatus());
        book.setPagesRead(0);
        book.setCoverColor(request.getCoverColor());

        return bookRepository.save(book);
    }

    @Override
    @Transactional
    public Book updateBook(Long id, BookUpdateRequest request) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));

        int updatedPagesRead = request.getPagesRead();
        if (book.getTotalPages() != null && book.getTotalPages() > 0) {
            updatedPagesRead = Math.min(updatedPagesRead, book.getTotalPages());
        }
        book.setPagesRead(updatedPagesRead);

        if (request.getStatus() == ReadStatus.READING && book.getStartDate() == null) {
            book.setStartDate(java.time.LocalDate.now());
        }

        if (request.getStatus() == ReadStatus.COMPLETED) {
            if (book.getStartDate() == null) {
                book.setStartDate(java.time.LocalDate.now()); // Set start date if completed instantly
            }
            if (book.getEndDate() == null) {
                book.setEndDate(java.time.LocalDate.now());
            }
        }

        book.setStatus(request.getStatus());
        book.setRating(request.getRating());

        return bookRepository.save(book);
    }

}
