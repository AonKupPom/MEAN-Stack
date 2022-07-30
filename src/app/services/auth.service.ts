import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  jwt = new JwtHelperService();
  currentUser = this.jwt.decodeToken(localStorage.getItem('token'));

  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) {
    const token = localStorage.getItem('token');
    if (token) {
      this.setCurrentUser(token);
    } else {
    }

  }

  login(data){
    return this.http.post<any>(`${location.origin}/api/login`, data);
  }

  register(data){
    const user = {
      title: data.register_title,
      firstname: data.register_firstname,
      lastname: data.register_lastname,
      email: data.register_email,
      password: data.register_password,
      birthDate: data.register_birthdate,
      gender: data.register_gender,
      tel: data.register_tel,
      address: data.register_address
    }
    return this.http.post<any>(`${location.origin}/api/register`, user)
  }

  sendToken(token){
    return this.http.post<any>(`${location.origin}/api/sendToken`,{token: token})
  }

  async logout(): Promise<void> {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  setCurrentUser(token): void {
      this.loggedIn = true;
      this.sendToken(token).subscribe(res => {
        if(!res.loggedIn){
          this.logout();
        }
      },error => {
        if(error.status == 401){
          this.logout();
        }
      })
  }

  getCurrentUser(){
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${location.origin}/api/getCurrentUser`,{token: token})
  }

}
