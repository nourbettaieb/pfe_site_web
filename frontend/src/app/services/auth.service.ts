import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }


  signUp(email: string, password: string){
    const body = {email, password};
    return this.http.post(`${environment.apiURL}/signup`, body);
  }

  login(email: string, password: string){
    const body = {email, password};
    return this.http.post<{token: string}>(`${environment.apiURL}/signin`, body);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')

  }

}
