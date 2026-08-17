import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import { UserProfile } from '../models/user.model';
import { DUMMY_BOOKS, DUMMY_USER } from '../data/dummy-data';
  
@Injectable({ providedIn: 'root' })
export class ReadingService {
  constructor(private http: HttpClient) {}
 
  getUser(): Observable<UserProfile> {
    return of(DUMMY_USER);
  }
 
  getBooks(): Observable<Book[]> {
    return of(DUMMY_BOOKS);
  }
 
  getCurrentlyReading(): Observable<Book[]> {
    return of(DUMMY_BOOKS.filter(b => b.status === 'reading'));
  }
 
  getCompletedBooks(): Observable<Book[]> {
    return of(DUMMY_BOOKS.filter(b => b.status === 'completed'));
  }
 
  getWantToRead(): Observable<Book[]> {
    return of(DUMMY_BOOKS.filter(b => b.status === 'want-to-read'));
  }
 
  getTotalPagesRead(): Observable<number> {
    return of(DUMMY_USER.totalPagesRead);
  }
}
 
 