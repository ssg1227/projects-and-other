import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show1',
  templateUrl: './slide-show1.component.html',
  styleUrls: ['./slide-show1.component.css']
})
export class SlideShow1Component implements OnInit {
  // Mock “images” array for slideshow
  imagesold: string[] = [
    'assets/mock1.jpg',
    'assets/mock2.jpg',
    'assets/mock3.jpg'
  ];
  images: string[] = [
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq1.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq2.jpeg',
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq3.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq4.jpeg',
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq5.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq6Pooja.jpeg',
    
  ];
  currentIndex = 0;

  // 3. Control play/pause state
  isPlaying = false;
  intervalId: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Start or stop auto-advance (every 2 seconds)
  togglePlay(): void {
    if (this.isPlaying) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else {
      this.intervalId = setInterval(() => this.next(), 2000);
    }
    this.isPlaying = !this.isPlaying;
  }

  ngOnDestroy(): void {
    // Clean up interval if still running
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
