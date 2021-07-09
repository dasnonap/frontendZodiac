import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmsService } from '../../services/films/films.service'; 
import { Film } from '../../models/film';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  	selector: 'app-home-page',
  	templateUrl: './home-page.component.html',
  	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	private subscription:Subscription;
	public films: Film[] = [];
 	constructor(
		private filmsService: FilmsService,
		
		) {

			this.subscription = new Subscription();
		}

  	ngOnInit(): void {
		console.log( localStorage );
		this.getFilms();
  	}

	getFilms(){
		this.subscription.add(this.filmsService.getFilms().subscribe((response: JSON) => {			
			let json_string = JSON.stringify(response);
			let json_array = JSON.parse( json_string );
			
			if( response == null ){
				this.films = [];
			}

			json_array.forEach(element => {
				this.films.push( <Film>element );
			});	
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  }));
	}

	getFilmImage( film: Film ){
		let posterUrl = atob(film.posterImage);
		return posterUrl + '/?width=250&height=360';
	}
}
