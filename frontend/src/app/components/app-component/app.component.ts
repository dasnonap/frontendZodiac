import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	public username: string;
	ngOnInit(): void {
		let token = localStorage.getItem("JWT_TOKEN");
		let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));

		this.username = decodedJWT.username;
	}
	title = 'frontend';
	
	@HostListener('window:scroll', [])
	onWindowScroll() {
		const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollOffset >= 200) {
			document.querySelectorAll('.controllable').forEach((c) => {
				c.classList.add('bg_color');
			});
			
			document.querySelectorAll('.controlable-logo').forEach((c) => {
				c.classList.add('medium_logo');
			});
		} else {
			document.querySelectorAll('.controllable').forEach((c) => {
				c.classList.remove('bg_color');
			});
			
			document.querySelectorAll('.controlable-logo').forEach((c) => {
				c.classList.remove('medium_logo');
			});
		}
	}
}




