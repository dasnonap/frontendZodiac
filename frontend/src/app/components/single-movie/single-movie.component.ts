import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { Subscription } from 'rxjs';
import { FilmsService } from 'src/app/services/films/films.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
	selector: 'app-single-movie',
	templateUrl: './single-movie.component.html',
	styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
	public id: string;
	public film: Film;
	private subscription:Subscription;
	constructor(
		private activatedRoute: ActivatedRoute,
		private filmsService: FilmsService,
		) {
			this.subscription = new Subscription();
			this.activatedRoute.queryParams.subscribe(params => {
				this.id = params['id'];
				
			});
		}

	ngOnInit(): void {
		this.getCurrentFilm( this.id );
	}

	getCurrentFilm(id: string){
		this.subscription.add(this.filmsService.getFilmById( id ).subscribe((response: JSON) => {			
			let json_string = JSON.stringify(response);
			let json_array = JSON.parse( json_string );

			this.film = <Film>json_array;
			
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  }));
	}

	getFilmMovieUrl(){
		
		return 'https://localhost:4223/api/movies/movie?id=' + this.film.appFilmId;
	}

}
