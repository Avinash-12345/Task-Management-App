import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for ngIf, ngFor, etc.
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Import both FormsModule and CommonModule
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response:any) => {
        console.log('Login successful:', response);
        this.authService.setToken(response.token); // Replace with real token
        alert('Login Successful');
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Login Failed');
      }
    });
  }
}
