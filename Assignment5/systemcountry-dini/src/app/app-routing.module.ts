import { NgModule } from '@angular/core';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeStatComponent } from './components/home-stat/home-stat.component';
const routes: Routes =[
  { path: '', redirectTo:'/home-stat', pathMatch:'full'},
  { path: 'all-countries', component: AllCountriesComponent},
  { path: 'home-stat', component: HomeStatComponent},
  { path: 'detail/:name', component: CountryDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
