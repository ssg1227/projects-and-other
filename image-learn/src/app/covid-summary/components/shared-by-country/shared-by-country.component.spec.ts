import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedByCountryComponent } from './shared-by-country.component';

describe('SharedByCountryComponent', () => {
  let component: SharedByCountryComponent;
  let fixture: ComponentFixture<SharedByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
