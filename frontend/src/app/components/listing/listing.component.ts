import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule  } from '@angular/forms';

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
	searchForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) { }
	

	ngOnInit(): void {
		this.searchForm = this.generateSearchForm();
	}

	generateSearchForm(){
		let search_value = this.formBuilder.control ( null,[ Validators.required ] );

		return this.formBuilder.group({
			search_value
		})
	}

	onSubmit() {
		// Call Service
	}
}
