import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNavbar = true
  UserDropdown = false
  collapse = 'collapse'
  isLoggedIn = this.auth.loggedIn
  jwt = new JwtHelperService();
  currentUser = this.jwt.decodeToken(localStorage.getItem('token'));

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login']);
  }

  logout() {
    this.auth.logout();
  }

  toggleUser(){
    this.UserDropdown = !this.UserDropdown
  }

  collapseMenu() {
    if(this.toggleNavbar){
      this.collapse = 'not-collapse'
      this.toggleNavbar = !this.toggleNavbar
    }
    else {
      this.collapse = 'collapse'
      this.toggleNavbar = !this.toggleNavbar
    }
  }
}
