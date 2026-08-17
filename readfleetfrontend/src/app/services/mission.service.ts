import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Mission } from '../models/mission.model';
import { DUMMY_MISSIONS } from '../data/dummy-data';
  
@Injectable({ providedIn: 'root' })
export class MissionService {
  constructor(private http: HttpClient) {}
 
  getMissions(): Observable<Mission[]> {
    return of(DUMMY_MISSIONS);
  }
 
  getActiveMissions(): Observable<Mission[]> {
    return of(DUMMY_MISSIONS.filter(m => m.status === 'active'));
  }
 
  getCompletedMissions(): Observable<Mission[]> {
    return of(DUMMY_MISSIONS.filter(m => m.status === 'completed'));
  }
}
 
 