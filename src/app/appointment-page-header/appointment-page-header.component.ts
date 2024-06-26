import { Component } from '@angular/core';
import { faUsers, faGear, faSearch, faUser, faChevronDown, faStar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-appointment-page-header',
  templateUrl: './appointment-page-header.component.html',
  styleUrl: './appointment-page-header.component.scss'
})
export class AppointmentPageHeaderComponent {
  faUsers = faUsers;
  faGear = faGear;
  faSearch = faSearch;
  faUser = faUser;
  faChevronDown = faChevronDown;
  faStar = faStar;
  faCalendarCheck = faCalendarCheck;
}
