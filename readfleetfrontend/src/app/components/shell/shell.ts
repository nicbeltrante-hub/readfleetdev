import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReadingService } from '../../services/reading.service';
import { FleetService } from '../../services/fleet.service';
import { UserProfile, getRank, getRankTier, getRankProgress, getPagesUntilNextRank, RANK_TIERS } from '../../models/user.model';
import { Ship } from '../../models/ship.model';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell implements OnInit{
  user: UserProfile | null = null;
  flagship: Ship | undefined;
  navOpen = true;
  profileOpen = false;
 
  navItems = [
    { path: '/dashboard',    label: 'Bridge',    icon: '🛰️' },
    { path: '/books',        label: 'Logs',      icon: '📖' },
    { path: '/fleet',        label: 'Fleet',     icon: '🚀' },
    { path: '/missions',     label: 'Missions',  icon: '⚡' },
    { path: '/battles',      label: 'Battles',   icon: '⚔️' },
    { path: '/achievements', label: 'Medals',    icon: '🏆' },
    { path: '/home-base',    label: 'Home Base', icon: '🌕' }
  ];

  constructor( private readingService: ReadingService,
    private fleetService: FleetService,
    private router: Router){};

    ngOnInit() {
    this.readingService.getUser().subscribe(u => this.user = u);
    this.fleetService.getFlagship().subscribe(s => this.flagship = s);
  }

  toggleNav() { this.navOpen = !this.navOpen; }
  toggleProfile() { this.profileOpen = !this.profileOpen; }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.user-chip')) this.profileOpen = false;
  }
 
  get currentRank(): string {
    return this.user ? getRank(this.user.totalPagesRead) : '';
  }
 
  get rankDescription(): string {
    return this.user ? getRankTier(this.user.totalPagesRead).description : '';
  }
 
  get rankProgress(): number {
    return this.user ? getRankProgress(this.user.totalPagesRead) : 0;
  }
 
  get pagesUntilNextRank(): number {
    return this.user ? getPagesUntilNextRank(this.user.totalPagesRead) : 0;
  }
 
  get nextRankName(): string {
    if (!this.user) return '';
    const tier = getRankTier(this.user.totalPagesRead);
    const idx = RANK_TIERS.findIndex(t => t.rank === tier.rank);
    return idx < RANK_TIERS.length - 1 ? RANK_TIERS[idx + 1].rank : 'Max Rank';
  }
 
  get nextShipPages(): number {
    const thresholds = [500, 1500, 3000, 6000, 10000, 20000];
    const current = this.user?.totalPagesRead ?? 0;
    return thresholds.find(t => t > current) ?? 20000;
  }
 
  get progressToNext(): number {
    const thresholds = [0, 500, 1500, 3000, 6000, 10000, 20000];
    const current = this.user?.totalPagesRead ?? 0;
    const nextIdx = thresholds.findIndex(t => t > current);
    if (nextIdx <= 0) return 100;
    const from = thresholds[nextIdx - 1];
    const to = thresholds[nextIdx];
    return Math.round(((current - from) / (to - from)) * 100);
  }
}
