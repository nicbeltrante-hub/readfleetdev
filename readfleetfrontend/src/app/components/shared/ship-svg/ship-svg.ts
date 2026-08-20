import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipClass } from '../../../models/ship.model';

@Component({
  selector: 'app-ship-svg',
  imports: [CommonModule],
  templateUrl: './ship-svg.html',
  styleUrl: './ship-svg.css',
})
export class ShipSvg {
  @Input() shipClass: ShipClass = 'scout';
  @Input() color: string = '#00d4ff';
  @Input() size: 'small' | 'medium' | 'large' | 'xl' = 'medium';
  @Input() locked: boolean = false;

  get viewBox(): string { return '0 0 100 100'; }
}
