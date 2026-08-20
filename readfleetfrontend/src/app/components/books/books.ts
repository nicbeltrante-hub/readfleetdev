import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReadingService } from '../../services/reading.service';
import { Book, ReadStatus } from '../../models/book.model';
 
const COVER_COLORS = [
  '#c27a2a','#2a5fc2','#1a7a4a','#7a2ac2','#c22a2a',
  '#2ac2c2','#888','#4a8a2a','#c2852a','#1a3a6a','#3a1a6a','#6a1a1a'
];
 
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books implements OnInit {
  books: Book[] = [];
  activeFilter: ReadStatus | 'all' = 'all';
 
  showAddForm = false;
  newTitle      = '';
  newAuthor     = '';
  newGenre      = '';
  newTotalPages: number | null = null;
  newStatus: ReadStatus = 'want-to-read';
 
  editingBookId: number | null = null;
  editingBook: Book | null = null;
  editPagesRead: number | null = null;
  editStatus: ReadStatus = 'reading';
  editRating: number | null = null;
 
  filters: { label: string; value: ReadStatus | 'all' }[] = [
    { label: 'All',          value: 'all' },
    { label: 'Reading',      value: 'reading' },
    { label: 'Completed',    value: 'completed' },
    { label: 'Want to Read', value: 'want-to-read' }
  ];
 
  statusOptions: { label: string; value: ReadStatus }[] = [
    { label: 'Reading',      value: 'reading' },
    { label: 'Completed',    value: 'completed' },
    { label: 'Want to Read', value: 'want-to-read' }
  ];
 
  constructor(private readingService: ReadingService) {}
 
  ngOnInit() {
    this.readingService.getBooks().subscribe(b => this.books = b);
  }
 
  addBook() {
    if (!this.newTitle.trim() || !this.newAuthor.trim()) return;
    const newBook: Book = {
      id: Date.now(),
      title: this.newTitle.trim(),
      author: this.newAuthor.trim(),
      genre: this.newGenre || 'General',
      totalPages: this.newTotalPages ?? 0,
      pagesRead: 0,
      status: this.newStatus,
      coverColor: COVER_COLORS[this.books.length % COVER_COLORS.length],
      startDate: this.newStatus === 'reading' ? new Date().toISOString().split('T')[0] : undefined
    };
    this.books = [...this.books, newBook];
    this.showAddForm = false;
    this.newTitle = ''; this.newAuthor = ''; this.newGenre = '';
    this.newTotalPages = null; this.newStatus = 'want-to-read';
    this.activeFilter = newBook.status;
  }
 
  openEdit(book: Book, event: Event) {
    event.stopPropagation();
    this.editingBookId = book.id;
    this.editingBook   = book;
    this.editPagesRead = book.pagesRead;
    this.editStatus    = book.status;
    this.editRating    = book.rating ?? null;
  }
 
  saveEdit(book: Book) {
    book.pagesRead = Math.min(this.editPagesRead ?? book.pagesRead, book.totalPages || Infinity);
    book.status    = this.editStatus;
    if (this.editRating !== null) book.rating = this.editRating;
    if (this.editStatus === 'completed' && !book.endDate) {
      book.endDate = new Date().toISOString().split('T')[0];
    }
    if (this.editStatus === 'reading' && !book.startDate) {
      book.startDate = new Date().toISOString().split('T')[0];
    }
    this.editingBookId = null;
    this.editingBook   = null;
  }
 
  cancelEdit() {
    this.editingBookId = null;
    this.editingBook   = null;
  }
 
  setEditRating(n: number) { this.editRating = this.editRating === n ? null : n; }
 
  get filteredBooks(): Book[] {
    if (this.activeFilter === 'all') return this.books;
    return this.books.filter(b => b.status === this.activeFilter);
  }
 
  progress(book: Book): number {
    if (!book.totalPages) return 0;
    return Math.round((book.pagesRead / book.totalPages) * 100);
  }
 
  stars(rating: number | undefined | null): string[] {
    return Array.from({ length: 5 }, (_, i) => i < (rating ?? 0) ? '★' : '☆');
  }
 
  statusLabel(s: ReadStatus): string {
    return ({ reading: 'Reading', completed: 'Completed', 'want-to-read': 'Want to Read' })[s];
  }
 
  countByStatus(filter: ReadStatus | 'all'): number {
    if (filter === 'all') return this.books.length;
    return this.books.filter(b => b.status === filter).length;
  }
}
