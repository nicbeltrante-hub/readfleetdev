import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyRoute } from './supply-route';

describe('SupplyRoute', () => {
  let component: SupplyRoute;
  let fixture: ComponentFixture<SupplyRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplyRoute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
