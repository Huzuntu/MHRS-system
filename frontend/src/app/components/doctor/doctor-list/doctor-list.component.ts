// src/app/components/doctor/doctor-list/doctor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent implements OnInit 
{
  doctors: Doctor[] = [];
  searchQuery: string = '';

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void 
  {
    this.getDoctors();
  }

  getDoctors(): void 
  {
    this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  searchDoctors(): void 
  {
    this.doctorService.searchDoctors(this.searchQuery).subscribe(doctors => this.doctors = doctors);
  }
}
