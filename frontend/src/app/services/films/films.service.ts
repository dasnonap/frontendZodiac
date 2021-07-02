import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FilmsService {

	constructor(private http: HttpClient) { }

	getFilms(): Observable<any>{
		console.log('films');
		
		return this.http.get("https://localhost:4223/api/movies");
	}
}
