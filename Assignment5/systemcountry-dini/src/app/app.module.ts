import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { HomeStatComponent } from './components/home-stat/home-stat.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    AllCountriesComponent,
    HomeStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
