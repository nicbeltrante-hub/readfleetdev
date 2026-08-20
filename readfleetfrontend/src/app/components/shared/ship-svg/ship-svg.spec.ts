import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSvg } from './ship-svg';

describe('ShipSvg', () => {
  let component: ShipSvg;
  let fixture: ComponentFixture<ShipSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipSvg],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipSvg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
