import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBase } from './home-base';

describe('HomeBase', () => {
  let component: HomeBase;
  let fixture: ComponentFixture<HomeBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBase],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
