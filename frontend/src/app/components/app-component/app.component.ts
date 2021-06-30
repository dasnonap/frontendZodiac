import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';
	films: any;

	


  
  @HostListener('window:scroll', [])
	onWindowScroll() {
		const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollOffset >= 450) {
			document.querySelectorAll('.controllable').forEach((c) => {
				c.classList.add('bg_color');
				// c.classList.remove('bg-transparent');
			});
			
			document.querySelectorAll('.controlable-logo').forEach((c) => {
				c.classList.add('medium_logo');
			});
		} else {
			document.querySelectorAll('.controllable').forEach((c) => {
				// c.classList.add('bg-transparent');
				c.classList.remove('bg_color');
			});
			
			document.querySelectorAll('.controlable-logo').forEach((c) => {
				c.classList.remove('medium_logo');
			});
		}
	}
}




