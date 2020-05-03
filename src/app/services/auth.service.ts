import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'http://localhost:3000/api/users/';
  private loginUrl  = 'http://localhost:3000/api/auths/';
  public role = '';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.signUpUrl, user);
  }

  // log user
  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  // obtiene el token desde localstorage
  getToken() {
    return localStorage.getItem('token');
  }

  // comprueba si el user esta logueado
  isLogged() {
    return !!localStorage.getItem('token');
  }

  // logout user
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
