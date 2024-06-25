import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInPagePhotoComponent } from './sign-in-page-photo/sign-in-page-photo.component';
import { SignInPageLoginComponent } from './sign-in-page-login/sign-in-page-login.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { AppointmentPageHeaderComponent } from './appointment-page-header/appointment-page-header.component';
import { AppointmentPageAppointmentsComponent } from './appointment-page-appointments/appointment-page-appointments.component';
import { AppointmentPageNearestHospitalsComponent } from './appointment-page-nearest-hospitals/appointment-page-nearest-hospitals.component';
import { AppointmentPageFooterComponent } from './appointment-page-footer/appointment-page-footer.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { CurrentAppointmentsComponent } from './current-appointments/current-appointments.component';
import { PreviousAppointmentsComponent } from './previous-appointments/previous-appointments.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignInPagePhotoComponent,
    SignInPageLoginComponent,
    AppointmentPageComponent,
    AppointmentPageHeaderComponent,
    AppointmentPageAppointmentsComponent,
    AppointmentPageNearestHospitalsComponent,
    AppointmentPageFooterComponent,
    CurrentAppointmentsComponent,
    PreviousAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
