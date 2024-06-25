import { Component, Type } from '@angular/core';
import { NearestHospitalsComponent } from '../nearest-hospitals/nearest-hospitals.component';
import { faKey } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-appointment-page-nearest-hospitals',
  templateUrl: './appointment-page-nearest-hospitals.component.html',
  styleUrl: './appointment-page-nearest-hospitals.component.scss'
})
export class AppointmentPageNearestHospitalsComponent {
  faKey = faKey;
}
