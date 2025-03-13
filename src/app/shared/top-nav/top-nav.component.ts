import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true, // ✅ Make it standalone
  template: `
    <div class="top-nav">
      <span>Welcome, {{ authService.getUser()?.name }}</span>
      <button (click)="logout()">Logout</button>
    </div>
  `,
})
export class TopNavComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}