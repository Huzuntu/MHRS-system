import { Component } from '@angular/core';
import { faBox } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nearest-hospitals',
  templateUrl: './nearest-hospitals.component.html',
  styleUrl: './nearest-hospitals.component.scss'
})
export class NearestHospitalsComponent {
  faBox = faBox;
}
