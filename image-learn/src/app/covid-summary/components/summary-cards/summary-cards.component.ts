import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit, OnChanges {
  @Input() covidData:any;
  constructor() { }
  summaryData:any = {};
  test = 'AA';
  totalConfirmed = "";
  ngOnInit(): void {
   } 
  ngOnChanges(): void {
      this.summaryData = this.covidData[0] ;
      this.test = JSON.parse(this.covidData).TotalConfirmed;
      this.totalConfirmed = this.covidData.TotalConfirmed;
      console.log(`Cards: ${JSON.stringify(this.summaryData)}`) ;
      
  }

}
