import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-home-stat',
  templateUrl: './home-stat.component.html',
  styleUrls: ['./home-stat.component.css']
})
export class HomeStatComponent implements OnInit {

  populatedCountries: Country[] = [];
  areaCountries: Country[] = [];
  gdpCountries:Country[] = [];

  isHome : boolean = true ;
  
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.setArea();
    this.setPopulasi();
    this.setGDP();
  }

  setPopulasi() {
    this.populatedCountries = this.countryService.getPopulatedCountries();
  }

  setArea() {
    this.areaCountries = this.countryService.getAreaCountries();
  }

  setGDP() {
    this.gdpCountries = this.countryService.getGDPCountries();    
  }

  toggleHome() {
    this.isHome = !this.isHome;
  }
}
