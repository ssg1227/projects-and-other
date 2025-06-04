import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidSummaryPageComponent } from './covid-summary-page.component';

describe('CovidSummaryPageComponent', () => {
  let component: CovidSummaryPageComponent;
  let fixture: ComponentFixture<CovidSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidSummaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
