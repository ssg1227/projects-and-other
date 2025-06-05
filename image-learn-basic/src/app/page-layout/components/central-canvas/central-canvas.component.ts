import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-canvas',
  templateUrl: './central-canvas.component.html',
  styleUrls: ['./central-canvas.component.css']
})
export class CentralCanvasComponent implements OnInit {
  // Mock “images” array for slideshow
  images: string[] = [
    'assets/mock1.jpg',
    'assets/mock2.jpg',
    'assets/mock3.jpg'
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // (no auto-play logic yet)
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
