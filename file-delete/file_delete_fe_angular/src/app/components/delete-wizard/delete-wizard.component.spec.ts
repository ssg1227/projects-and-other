import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWizardComponent } from './delete-wizard.component';

describe('DeleteWizardComponent', () => {
  let component: DeleteWizardComponent;
  let fixture: ComponentFixture<DeleteWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
