import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPageNearestHospitalsComponent } from './appointment-page-nearest-hospitals.component';

describe('AppointmentPageNearestHospitalsComponent', () => {
  let component: AppointmentPageNearestHospitalsComponent;
  let fixture: ComponentFixture<AppointmentPageNearestHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentPageNearestHospitalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPageNearestHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
