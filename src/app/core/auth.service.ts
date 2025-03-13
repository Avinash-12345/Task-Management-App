import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in';

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });
    console.log('Request Body:', body); 
    return this.http.post(`${this.apiUrl}/api/login`, body, { headers });
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated.next(true);
  }

  getUser() {
    const token = localStorage.getItem('token');
    if (token) {
      // Mock user data from token or decode token if JWT
      return { name: 'John Doe' };
    }
    return null;
  }
}
