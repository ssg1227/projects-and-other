import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/shared/services/covid-data.service';
import { SearchService } from 'src/app/shared/services/search.service';
 
@Component({
  selector: 'app-covid-country-page',
  templateUrl: './covid-country-page.component.html',
  styleUrls: ['./covid-country-page.component.css']
})
export class CovidCountryPageComponent implements OnInit {
  countriesData:any = []; 
  constructor(private covidDataService: CovidDataService, 
      private searchService: SearchService
  ) { }

  ngOnInit(): void {
     let me = this;
   this.covidDataService.getCountriesData()
    .subscribe(
      (data:any) => {
        me.countriesData = data ;

        console.log(JSON.stringify(data));
      }
    ); 
  }
  searchCountry(searchCountry:string):any {
    const filteredCountries = this.countriesData
            .filter((c:any) => c.Country.toLowerCase().includes(searchCountry.toLowerCase())) ;
    this.searchService.setCountries(filteredCountries);
  }

}
