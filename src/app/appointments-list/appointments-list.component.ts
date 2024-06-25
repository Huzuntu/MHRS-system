import { Component, Type } from '@angular/core';
import { CurrentAppointmentsComponent } from '../current-appointments/current-appointments.component';
import { PreviousAppointmentsComponent } from '../previous-appointments/previous-appointments.component';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.scss'
})
export class AppointmentsListComponent {
  
  components: { [key: string]: Type<any> } = {
    'current-appointments': CurrentAppointmentsComponent,
    'previous-appointments': PreviousAppointmentsComponent
  };

  tabs = [
    {
      label: 'Current Appointments',
      component: 'CurrentAppointmentsComponent'
    },
    {
      label: 'Previous Appointments',
      component: 'PreviousAppointmentsComponent'
    }
  ];

  selectedIndex = 0;

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
  
  getComponent(componentName: string): Type<any> {
    return this.components[componentName];
  }

}
