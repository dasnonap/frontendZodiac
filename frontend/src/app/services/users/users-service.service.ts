import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
		
		return this.httpClient.get("https://localhost:4223/api/users");
	}

  login(user: any): Observable<any>{
    let body = new FormData();
    body.append('username', user.username );
    body.append('password', user.password );

    return this.httpClient.post("https://localhost:4223/api/users/login", body);
  }

  register(user: any): Observable<any>{
    let body = new FormData();

    body.append( 'username', user.username );
    body.append( 'fname', user.fname );
    body.append( 'lname', user.lname );
    body.append( 'password', user.password1 );
    body.append( 'email', user.email );
    body.append( 'iban', user.iban );
    
    return this.httpClient.post("https://localhost:4223/api/users/register", body);
  }
}
