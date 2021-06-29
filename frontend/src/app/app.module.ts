import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './components/app-component/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListingComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
