import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShow1Component } from './slide-show1.component';

describe('SlideShow1Component', () => {
  let component: SlideShow1Component;
  let fixture: ComponentFixture<SlideShow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShow1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
