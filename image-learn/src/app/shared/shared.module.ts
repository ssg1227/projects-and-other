import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    MatrixComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule
  ], exports: [
    NavbarComponent,
    HeaderComponent,
    MatrixComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
