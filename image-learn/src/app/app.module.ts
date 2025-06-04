import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CovidCountryModule } from './covid-country/covid-country.module';
import { CovidSummaryModule } from './covid-summary/covid-summary.module';
import { CovidLiveModule } from './covid-live/covid-live.module';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CovidCountryModule,
    CovidSummaryModule, 
    CovidLiveModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
