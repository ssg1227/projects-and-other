import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatrixComponent } from './components/matrix/matrix.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    MatrixComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavbarComponent,
    HeaderComponent,
    MatrixComponent,
  ]
})
export class SharedModule { }
