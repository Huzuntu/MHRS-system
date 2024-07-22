import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faEye, faEyeSlash, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-sign-in-page-login-form',
  templateUrl: './sign-in-page-login-form.component.html',
  styleUrl: './sign-in-page-login-form.component.scss'
})
export class SignInPageLoginFormComponent {
  public showPassword: boolean = false;
  public isSignUp: boolean = false;

  faUser = faUser;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faUserPlus = faUserPlus;

  @Output() signUpButtonClicked: boolean = false;

  constructor(private router: Router) {}

  mode = 'date';
  
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  routeToAppointmentPage(): void {
    this.router.navigateByUrl("/appointment");
  }
  
  signUpAppear(): void {
    this.isSignUp = true;
  }
}
