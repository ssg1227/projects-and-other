import { Injectable } from '@angular/core'; 
import {   HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) { }
  getSummaryData() {
    return this.http.get("http://localhost:3000/summary")
    // mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/quarantinecountry.json
  }
  getCountriesData() {
    return this.http.get("http://localhost:3000/countries")
    // mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/quarantinecountry.json
  }
}
