import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAnimationPageComponent } from './covid-animation-page.component';

describe('CovidLivePageComponent', () => {
  let component: CovidAnimationPageComponent;
  let fixture: ComponentFixture<CovidAnimationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidAnimationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
