import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestHospitalsComponent } from './nearest-hospitals.component';

describe('NearestHospitalsComponent', () => {
  let component: NearestHospitalsComponent;
  let fixture: ComponentFixture<NearestHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NearestHospitalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearestHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
