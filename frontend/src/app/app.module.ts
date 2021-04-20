import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppComponent } from './components/app-component/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
