import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Battle } from '../models/battle.model';
import { StarSystem, MapRoute } from '../models/star-map.model';
import { DUMMY_BATTLES, DUMMY_STAR_SYSTEMS, DUMMY_MAP_ROUTES } from '../data/dummy-data';
  
@Injectable({ providedIn: 'root' })
export class BattleService {
  constructor(private http: HttpClient) {}
 
  getBattles(): Observable<Battle[]> {
    return of(DUMMY_BATTLES);
  }
 
  getActiveBattles(): Observable<Battle[]> {
    return of(DUMMY_BATTLES.filter(b => b.status === 'active'));
  }
 
  getCompletedBattles(): Observable<Battle[]> {
    return of(DUMMY_BATTLES.filter(b => b.status === 'completed'));
  }
 
  getStarSystems(): Observable<StarSystem[]> {
    return of(DUMMY_STAR_SYSTEMS);
  }
 
  getMapRoutes(): Observable<MapRoute[]> {
    return of(DUMMY_MAP_ROUTES);
  }
}
 
 