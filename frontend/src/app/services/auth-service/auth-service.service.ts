import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authOnLogin(username: string, payload: JSON){
    localStorage.setItem("JWT_TOKEN",payload["token"]);
  }

  isLoggedIn(): boolean{
    const token = localStorage.getItem("JWT_TOKEN");
    
    if (token == null) return false;
    console.log( token );
    const decodedToken: JSON = decode(token);
    
    if (decodedToken["exp"]*1000 < new Date().getTime()) {
      this.authOnLogout();
      return false;
    }
    return true;
  }

  authOnLogout(){
    localStorage.removeItem("JWT_TOKEN");
  }

  getLoggedInUsername(): string {
    const token: JSON = this.decodeToken();
    return token["username"];
  }

  decodeToken (): JSON{
    const token = localStorage.getItem("JWT_TOKEN");
    const decodedToken: JSON = decode(token);
    return decodedToken;
  }
}
