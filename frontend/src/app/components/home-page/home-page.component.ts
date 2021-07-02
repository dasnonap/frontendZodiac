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
	films: Film[] = [];
 	constructor(
		private filmsService: FilmsService,
		
		) {

			this.subscription = new Subscription();
		}

  	ngOnInit(): void {
		this.getAdverts();
		console.log('erewrewre');
  	}

	getAdverts(){
		this.subscription.add(this.filmsService.getFilms().subscribe((response: JSON) => {
			console.log(response);
			
			this.films = response["ads"];
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  }));
	}
}
