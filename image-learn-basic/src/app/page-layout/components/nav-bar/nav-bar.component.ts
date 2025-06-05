import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // Mock menu items; later you might replace with real links or cards
  menuItems: string[] = ['Home', 'Gallery', 'About', 'Contact'];

  constructor() { }

  ngOnInit(): void {
    // (nothing needed for now)
  }
}
