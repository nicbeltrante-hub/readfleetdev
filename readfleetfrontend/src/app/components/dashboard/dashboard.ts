import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReadingService } from '../../services/reading.service';
import { FleetService } from '../../services/fleet.service';
import { MissionService } from '../../services/mission.service';
import { UserProfile } from '../../models/user.model';
import { getRank, getRankTier, getRankProgress, getPagesUntilNextRank, RANK_TIERS } from '../../models/user.model';
import { Book } from '../../models/book.model';
import { Ship } from '../../models/ship.model';
import { Mission } from '../../models/mission.model';
import { Achievement } from '../../models/achievement.model';
import { ShipSvg } from '../shared/ship-svg/ship-svg';
 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ShipSvg],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  user = signal<UserProfile | null>(null);
  currentlyReading = signal<Book[]>([]);
  flagship = signal<Ship | undefined>(undefined);
  activeMissions = signal<Mission[]>([]);
  recentAchievements = signal<Achievement[]>([]);
 
  constructor(
    private readingService: ReadingService,
    private fleetService: FleetService,
    private missionService: MissionService
  ) {}
 
  ngOnInit() {
    this.readingService.getUser().subscribe(u => this.user.set(u));
    this.readingService.getCurrentlyReading().subscribe(b => {console.log('currentlyReading result:', b); this.currentlyReading.set(b)});
    
    this.fleetService.getFlagship().subscribe(s => this.flagship.set(s));
    this.missionService.getActiveMissions().subscribe(m => this.activeMissions.set(m.slice(0, 3)));
    this.fleetService.getUnlockedAchievements().subscribe(a =>
      this.recentAchievements.set(a.slice(-3).reverse())
    );
  }
 
  get readingProgress(): number {
    if (!this.currentlyReading().length) return 0;
    const b = this.currentlyReading()[0];
    return Math.round((b.pagesRead / b.totalPages) * 100);
  }
 
  get currentRank(): string {
    const u = this.user();
    return u ? getRank(u.totalPagesRead) : '';
  }
 
  get rankProgress(): number {
    const u = this.user();
    return u ? getRankProgress(u.totalPagesRead) : 0;
  }
 
  get pagesUntilNextRank(): number {
    const u = this.user();
    return u ? getPagesUntilNextRank(u.totalPagesRead) : 0;
  }
 
  get nextRankName(): string {
    const u = this.user();
    if (!u) return '';
    const tier = getRankTier(u.totalPagesRead);
    const idx = RANK_TIERS.findIndex(t => t.rank === tier.rank);
    return idx < RANK_TIERS.length - 1 ? RANK_TIERS[idx + 1].rank : 'Max Rank';
  }
 
  missionProgress(m: Mission): number {
    return Math.round((m.progress / m.target) * 100);
  }
}
 
 