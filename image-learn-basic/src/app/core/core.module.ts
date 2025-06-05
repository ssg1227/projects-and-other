import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShow1Component } from './components/slide-show1/slide-show1.component';



@NgModule({
  declarations: [
    SlideShow1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SlideShow1Component,
  ]
})
export class CoreModule { }
