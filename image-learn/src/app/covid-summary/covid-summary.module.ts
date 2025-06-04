import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidSummaryRoutingModule } from './covid-summary-routing.module';
import { CovidSummaryPageComponent } from './components/covid-summary-page/covid-summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { SharedByCountryComponent } from './components/shared-by-country/shared-by-country.component';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CovidSummaryPageComponent,
    SummaryCardsComponent,
    TopCountriesComponent,
    SharedByCountryComponent,
    ConfirmedByCountryComponent
  ],
  imports: [
    CommonModule,
    CovidSummaryRoutingModule,
    SharedModule,
  ]
})
export class CovidSummaryModule { }
