import { CanActivate, Router, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService implements CanActivate {
  constructor(
    public router: Router
  ){ }

  canActivate(): boolean {
      var token = localStorage.getItem('token');
      if (token != null) return true;
      return false;
  }
}
