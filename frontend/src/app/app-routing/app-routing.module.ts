import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../components/home-page/home-page.component';
import { ListingComponent } from '../components/listing/listing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: ListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
