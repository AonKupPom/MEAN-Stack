import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  jwt = new JwtHelperService();

  constructor(
    private auth: AuthService,
    private router: Router,
    ){
  };

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  async checkUserLogin(route: ActivatedRouteSnapshot, url: any): Promise<boolean> {
    if (this.auth.loggedIn) {
      if (route.data['role'] && route.data['role'].indexOf(this.jwt.decodeToken(localStorage.getItem('token')).role) === -1) {
        this.router.navigate(['/welcome']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/welcome']);
    return false;
  }

}
