import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { CentralCanvasComponent } from './components/central-canvas/central-canvas.component';
// ← import CoreModule so CentralCanvas can use <app-slide-show-1>
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    CentralCanvasComponent,
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    CoreModule,
  ], 
  exports: [
    NavBarComponent,
    HeaderComponent,
    CentralCanvasComponent,
  ]
})
export class PageLayoutModule { }
