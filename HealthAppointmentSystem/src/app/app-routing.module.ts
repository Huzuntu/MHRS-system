import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInPagePhotoComponent } from './sign-in-page-photo/sign-in-page-photo.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'appointment', component: AppointmentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
