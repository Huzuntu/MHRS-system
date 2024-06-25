import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPageFooterComponent } from './appointment-page-footer.component';

describe('AppointmentPageFooterComponent', () => {
  let component: AppointmentPageFooterComponent;
  let fixture: ComponentFixture<AppointmentPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentPageFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
