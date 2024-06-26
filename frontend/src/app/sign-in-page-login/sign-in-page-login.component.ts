import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in-page-login',
  templateUrl: './sign-in-page-login.component.html',
  styleUrl: './sign-in-page-login.component.scss'
})
export class SignInPageLoginComponent {
  public showPassword: boolean = false;
  faUser = faUser;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  routeToAppointmentPage(): void {
    this.router.navigateByUrl("/appointment");
  }
}
