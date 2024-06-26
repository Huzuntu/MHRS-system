import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPageHeaderComponent } from './appointment-page-header.component';

describe('AppointmentPageHeaderComponent', () => {
  let component: AppointmentPageHeaderComponent;
  let fixture: ComponentFixture<AppointmentPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
