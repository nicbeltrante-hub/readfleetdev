import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  navOpen = true;
 
  navItems = [
    { path: '/dashboard',    label: 'Bridge',    icon: '🛰️' },
    { path: '/fleet',        label: 'Fleet',     icon: '🚀' },
    { path: '/books',        label: 'Logs',      icon: '📖' },
    { path: '/missions',     label: 'Missions',  icon: '⚡' },
    { path: '/battles',      label: 'Battles',   icon: '⚔️' },
    { path: '/achievements', label: 'Medals',    icon: '🏆' },
    { path: '/home-base',    label: 'Home Base', icon: '🌕' }
  ];

  constructor( private router: Router){};

  toggleNav() { this.navOpen = !this.navOpen; }
}
