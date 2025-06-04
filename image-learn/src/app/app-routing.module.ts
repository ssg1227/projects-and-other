import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },{
    path: 'summary',
    loadChildren: () =>
      import('./covid-summary/covid-summary.module').then(m => m.CovidSummaryModule)
  },{
    path: 'country',
    loadChildren: () =>
      import('./covid-country/covid-country.module').then(m => m.CovidCountryModule)
  },{
    path: 'live',
    loadChildren: () =>
      import('./covid-live/covid-live.module').then(m => m.CovidLiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
