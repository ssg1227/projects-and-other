import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Mock title, subtitle
  title = 'Image Learn';
  subtitle = 'A simple Angular 13 slideshow + morph demo';
}
