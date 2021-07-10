import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from '../components/home-page/home-page.component';
import { ListingComponent } from '../components/listing/listing.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGardServiceService } from '../services/auth-gard/auth-gard-service.service';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGardServiceService] },
  { path: 'search', component: ListingComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
