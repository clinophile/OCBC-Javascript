import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: Country[] = [];
  isAllCountries: boolean = true ;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countries = this.countryService.getCountries();
  }

  toggleHome() {
    this.isAllCountries = !this.isAllCountries;
  }
}
