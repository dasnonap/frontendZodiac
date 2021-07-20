import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	private subscription: Subscription;
	public films: Film[] = [];
	public content: string;
	private body = document.getElementsByTagName('body')[0];

	constructor( private filmsService: FilmsService ) { 
		this.subscription = new Subscription();
	}
	ngOnInit(): void {

	}

	onCategoryClick( $event ){
		$event.preventDefault();
		this.films = [];
		let $target   = $event.target;
		this.content  = $target.innerText;
		let current = document.querySelector('.is-active');
		if( current != null ){
			current.classList.toggle("is-active");
		}
		

		$target.classList.toggle("is-active");
		this.body.classList.add("is-loading");
		
		this.subscription.add(this.filmsService.getCategoryResult( this.content ).subscribe( (response: JSON ) => {			
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
		  setTimeout(() => {
			this.body.classList.remove("is-loading");  
		}, 3000);  

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
