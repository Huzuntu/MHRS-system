
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8080/api/doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  searchDoctors(query: string): Observable<Doctor[]> 
  {
    const searchUrl = `${this.apiUrl}/search?name=${query}`;
    console.log(searchUrl); // Log the constructed API URL
    console.log(this.http.get<Doctor[]>(searchUrl));
    return this.http.get<Doctor[]>(searchUrl);
  }
}