import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})

export class SignInPageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Implement your authentication logic here.
    // For demonstration, let's assume the user is successfully authenticated.
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/appointments']);
    } else {
      alert('Invalid credentials');
    }
  }
}
