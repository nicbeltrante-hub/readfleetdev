import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { UserProfile } from '../models/user.model';
import { DUMMY_BOOKS, DUMMY_USER } from '../data/dummy-data';
  
@Injectable({ providedIn: 'root' })
export class ReadingService {

   private apiUrl = 'http://localhost:8080/api/books';
    
    constructor(private http: HttpClient) {}
 
    getUser(): Observable<UserProfile> {
        return of(DUMMY_USER);
    }
 
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.apiUrl}/getBooks`);
    }
 
    getCurrentlyReading(): Observable<Book[]> {
        return this.getBooks().pipe(map(books => books.filter(b => b.status === 'reading')));
    }
 
    getCompletedBooks(): Observable<Book[]> {
        return this.getBooks().pipe(map(books => books.filter(b => b.status === 'completed')));
    }
 
    getWantToRead(): Observable<Book[]> {
        return this.getBooks().pipe(map(books => books.filter(b => b.status === 'want-to-read')));
    }
 
    getTotalPagesRead(): Observable<number> {
        return this.getBooks().pipe(
        map(books => books.reduce((sum, b) => sum + b.pagesRead, 0))
        );
    }
}
 
 