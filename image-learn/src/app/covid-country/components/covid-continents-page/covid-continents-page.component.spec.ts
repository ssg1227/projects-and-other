import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidContinentsPageComponent } from './covid-continents-page.component';

describe('CovidContinentsPageComponent', () => {
  let component: CovidContinentsPageComponent;
  let fixture: ComponentFixture<CovidContinentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidContinentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidContinentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
