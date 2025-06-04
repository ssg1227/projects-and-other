import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidCountryPageComponent } from './components/covid-country-page/covid-country-page.component';
import { CovidContinentsPageComponent } from './components/covid-continents-page/covid-continents-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'country', pathMatch: 'full' },
    {path: 'country', component: CovidCountryPageComponent},
    {path: 'continent', component: CovidContinentsPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidCountryRoutingModule { }
