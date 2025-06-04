import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLivePageComponent } from './covid-live-page.component';

describe('CovidLivePageComponent', () => {
  let component: CovidLivePageComponent;
  let fixture: ComponentFixture<CovidLivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidLivePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
