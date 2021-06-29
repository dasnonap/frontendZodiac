import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  links = Array();
  ngOnInit(): void {
    this.links = new Array( 'First', 'Second', 'Third');
  }

}
