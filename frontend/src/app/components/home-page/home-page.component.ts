import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmsService } from '../../services/films/films.service'; 
import { Film } from '../../models/film';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  	selector: 'app-home-page',
  	templateUrl: './home-page.component.html',
  	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
	private subscription:Subscription;
	public films: Film[] = [];
	public suggestedFilms: Film[] = [];
	public featuredFilm: Film;
	public isLoading: boolean;
	private body = document.getElementsByTagName('body')[0];
	

 	constructor(
		private filmsService: FilmsService,
		
		) {

			this.subscription = new Subscription();
		}

	ngOnDestroy(): void {

		this.subscription.unsubscribe();
	}

  	ngOnInit(): void {
		var header = document.getElementsByClassName('header')[0];
		header.classList.toggle( "header--header-alt" );
		header.classList.toggle( "controllable" );
		this.getFeaturedFilm();
		this.getFilms();
		this.getSuggestedFilms();
		
		
		this.body.classList.add("is-loading");
		setTimeout(() => {
			this.body.classList.remove("is-loading");
		}, 2000);

		
  	}

	getFilms(){
		
		this.subscription.add(
			this.filmsService.getFilms(1).pipe().subscribe((response: JSON) => {			
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

	getSuggestedFilms(){
		this.subscription.add(this.filmsService.getFilms(2).subscribe((response: JSON) => {			
			let json_string = JSON.stringify(response);
			let json_array = JSON.parse( json_string );
			
			if( response == null ){
				this.suggestedFilms = [];
			}

			json_array.forEach(element => {
				this.suggestedFilms.push( <Film>element );
			});	
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  }));
	}

	getFeaturedFilm(){
		this.subscription.add(this.filmsService.getFilm().subscribe((response: JSON) => {			
			let json_string = JSON.stringify(response);
			let json_array = JSON.parse( json_string );

			this.featuredFilm = <Film>json_array;
			
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  }));
	}

	getFilmImage( film: Film, width, height){
		let posterUrl = atob(film.posterImage);
		
		return posterUrl + '/?width=' + width + '&height=' + height;
	}

	getFilmMovieUrl( film: Film, getPageUrl: boolean ){
		if( getPageUrl ){
			return '/movie?id=' + film.appFilmId;
		}


		return 'https://localhost:4223/api/movies/movie?id=' + film.appFilmId;
	}
}
