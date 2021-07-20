import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from '../components/home-page/home-page.component';
import { ListingComponent } from '../components/listing/listing.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { LoginComponent } from '../components/login/login.component';
import { SingleMovieComponent } from '../components/single-movie/single-movie.component';
import { AuthGardServiceService } from '../services/auth-gard/auth-gard-service.service';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGardServiceService] },
  { path: 'search', component: ListingComponent, canActivate: [AuthGardServiceService]},
  { path: 'categories', component: CategoriesComponent,  canActivate: [AuthGardServiceService] },
  { path: 'movie', component: SingleMovieComponent,  canActivate: [AuthGardServiceService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
