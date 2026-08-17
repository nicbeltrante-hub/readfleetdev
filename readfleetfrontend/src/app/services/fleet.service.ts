import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ship } from '../models/ship.model';
import { Achievement } from '../models/achievement.model';
import { DUMMY_SHIPS, DUMMY_ACHIEVEMENTS } from '../data/dummy-data';
  
@Injectable({ providedIn: 'root' })
export class FleetService {
  constructor(private http: HttpClient) {}
 
  getFleet(): Observable<Ship[]> {
    return of(DUMMY_SHIPS);
  }
 
  getFlagship(): Observable<Ship | undefined> {
    return of(DUMMY_SHIPS.find(s => s.flagship));
  }
 
  getUnlockedShips(): Observable<Ship[]> {
    return of(DUMMY_SHIPS.filter(s => s.unlocked));
  }
 
  getAchievements(): Observable<Achievement[]> {
    return of(DUMMY_ACHIEVEMENTS);
  }
 
  getUnlockedAchievements(): Observable<Achievement[]> {
    return of(DUMMY_ACHIEVEMENTS.filter(a => a.unlocked));
  }
}
 
 