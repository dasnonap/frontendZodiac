import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardServiceService implements CanActivate {

  constructor(private authService: AuthServiceService, 
    private router: Router) {}

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

 
}
