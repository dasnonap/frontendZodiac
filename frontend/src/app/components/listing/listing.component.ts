import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
	searchForm: FormGroup;
	private subscription: Subscription;
	public films: Film[] = [];
	private string_query: string;
	private body = document.getElementsByTagName('body')[0];

	constructor(
		private formBuilder: FormBuilder,
		private filmsService: FilmsService,
	) {
		this.subscription = new Subscription();
	}
	

	ngOnInit(): void {
		this.searchForm = this.generateSearchForm();
	}

	generateSearchForm(){
		let field = this.formBuilder.control ( null,[ Validators.required ] );

		return this.formBuilder.group({
			field
		})
	}

	onSubmit() {
		this.string_query = this.searchForm.value.field;
		this.body.classList.add("is-loading");
		
		this.subscription.add(this.filmsService.getSearchResult( this.string_query ).subscribe((response: JSON) => {			
			let json_string = JSON.stringify(response);
			let json_array = JSON.parse( json_string );
			
			if( response == null ){
				this.films = [];
			}

			if( this.films != null ){
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
		}, 2000);  
	}

	getFilmImage( film: Film, width, height){
		let posterUrl = atob(film.posterImage);
		
		return posterUrl + '/?width=' + width + '&height=' + height;
	}
}
