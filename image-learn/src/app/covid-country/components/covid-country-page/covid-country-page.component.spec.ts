import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountryPageComponent } from './covid-country-page.component';

describe('CovidCountryPageComponent', () => {
  let component: CovidCountryPageComponent;
  let fixture: ComponentFixture<CovidCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidCountryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
