import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:string ='';
  @Output() countryToSearch = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  search(clear='')  {
    if(clear !== '') 
      this.searchTerm = '';
    this.countryToSearch.emit(this.searchTerm) ;
  }
}
