import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentPageComponent } from '../app/components/appointment-page/appointment-page.component';
import { AppointmentPageAppointmentsComponent } from '../app/components/appointment-page-appointments/appointment-page-appointments.component';
import { AppointmentPageFooterComponent } from '../app/components/appointment-page-footer/appointment-page-footer.component';
import { AppointmentPageHeaderComponent } from '../app/components/appointment-page-header/appointment-page-header.component';
import { AppointmentPageNearestHospitalsComponent } from '../app/components/appointment-page-nearest-hospitals/appointment-page-nearest-hospitals.component';
import { CurrentAppointmentsComponent } from '../app/components/current-appointments/current-appointments.component';
import { PreviousAppointmentsComponent } from '../app/components/previous-appointments/previous-appointments.component';
import { SignInPageComponent } from '../app/components/sign-in-page/sign-in-page.component';
import { SignInPageLoginComponent } from '../app/components/sign-in-page-login/sign-in-page-login.component';
import { SignInPagePhotoComponent } from '../app/components/sign-in-page-photo/sign-in-page-photo.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsListComponent } from '../app/components/appointments-list/appointments-list.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzTabsModule } from 'ng-zorro-antd/tabs'; 
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NearestHospitalsComponent } from '../app/components/nearest-hospitals/nearest-hospitals.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DoctorListComponent } from '../app/components/doctor/doctor-list/doctor-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AppointmentPageComponent,
    AppointmentPageAppointmentsComponent,
    AppointmentPageFooterComponent,
    AppointmentPageHeaderComponent,
    AppointmentPageNearestHospitalsComponent,
    CurrentAppointmentsComponent,
    PreviousAppointmentsComponent,
    SignInPageComponent,
    SignInPageLoginComponent,
    SignInPagePhotoComponent,
    AppointmentsListComponent,
    NearestHospitalsComponent,
    DoctorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    NzTabsModule,
    NzButtonComponent,
    NzDropDownModule,
    NzIconModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
