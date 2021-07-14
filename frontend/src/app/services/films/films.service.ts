import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FilmsService {

	constructor(private http: HttpClient) { }

	getFilms( page: number ): Observable<any>{
		
		return this.http.get("https://localhost:4223/api/movies/listing?page_id=" + page );
	}

	getFilmThumbnail( url: string ): Observable<any>{
		return this.http.get( url );
	}
}
