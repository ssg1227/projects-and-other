import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidSummaryPageComponent } from './components/covid-summary-page/covid-summary-page.component';
const routes: Routes = [
  {path: '', component: CovidSummaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidSummaryRoutingModule { }
