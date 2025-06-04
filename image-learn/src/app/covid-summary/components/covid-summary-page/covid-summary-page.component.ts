import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/shared/services/covid-data.service';
@Component({
  selector: 'app-covid-summary-page',
  templateUrl: './covid-summary-page.component.html',
  styleUrls: ['./covid-summary-page.component.css']
})
export class CovidSummaryPageComponent implements OnInit {

  constructor(private covidDataService: CovidDataService) { }
  summaryData:any = {};
  ngOnInit(): void {
   let me = this;
   this.covidDataService.getSummaryData()
    .subscribe(
      (data:any) => {
        me.summaryData = data ;
        console.log(JSON.stringify(data));
      }
    ); 
  }

}
