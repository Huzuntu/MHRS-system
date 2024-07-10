import { Component } from '@angular/core';
import { faUsers, faGear, faSearch, faUser, faChevronDown, faStar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Doctor } from '../../models/doctor.model';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-appointment-page-header',
  templateUrl: './appointment-page-header.component.html',
  styleUrl: './appointment-page-header.component.scss'
})
export class AppointmentPageHeaderComponent {

  searchQuery: string = '';
  searchResults: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  faUsers = faUsers;
  faGear = faGear;
  faSearch = faSearch;
  faUser = faUser;
  faChevronDown = faChevronDown;
  faStar = faStar;
  faCalendarCheck = faCalendarCheck;

  onSearch(): void 
  {
    console.log('Search button clicked');
    console.log(this.searchQuery);
    if (this.searchQuery.length > 0) {
      console.log(`Searching for: ${this.searchQuery}`);
      this.doctorService.searchDoctors(this.searchQuery).subscribe(doctors => {
        console.log('Doctors found:', doctors);
        this.searchResults = doctors;
        console.log(this.searchResults);
      });
    } else {
      console.log('Search query is empty');
      this.searchResults = [];
    }
  }
}
