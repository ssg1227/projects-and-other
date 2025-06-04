import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidCountryRoutingModule } from './covid-country-routing.module';
import { CovidCountryPageComponent } from './components/covid-country-page/covid-country-page.component';
import { CovidContinentsPageComponent } from './components/covid-continents-page/covid-continents-page.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './components/data-table/data-table.component';
@NgModule({
  declarations: [
    CovidCountryPageComponent,
    CovidContinentsPageComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    CovidCountryRoutingModule,
    SharedModule,
  ]
})
export class CovidCountryModule { }
