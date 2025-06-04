import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit,OnChanges,OnDestroy {
  @Input() countriesData:any ;
  subscription = new Subscription();
  countryData:any = [];
  test = 'AA';
  totalConfirmed = "";
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.subscription = this.searchService.getCountries()
      .subscribe(
        (data:any) => {
          this.countriesData = data;
          
        } 
         
      )
  }
  ngOnChanges(): void {
      this.countryData = this.countriesData  ;
         
  }
  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }

}
