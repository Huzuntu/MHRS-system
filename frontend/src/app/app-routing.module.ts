import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from '../app/components/sign-in-page/sign-in-page.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';

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
