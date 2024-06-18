import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPageAppointmentsComponent } from './appointment-page-appointments.component';

describe('AppointmentPageAppointmentsComponent', () => {
  let component: AppointmentPageAppointmentsComponent;
  let fixture: ComponentFixture<AppointmentPageAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentPageAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentPageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
