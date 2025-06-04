import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidLivePageComponent } from './components/covid-live-page/covid-live-page.component';
import { CovidAnimationPageComponent } from './components/covid-animation-page/covid-animation-page.component';
const routes: Routes = [
    {path: '', component: CovidLivePageComponent},
    {path: 'animation', component: CovidAnimationPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidLiveRoutingModule { }
