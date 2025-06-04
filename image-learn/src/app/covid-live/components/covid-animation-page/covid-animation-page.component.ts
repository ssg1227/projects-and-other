import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-animation-page',
  templateUrl: './covid-animation-page.component.html',
  styleUrls: ['./covid-animation-page.component.css']
})
export class CovidAnimationPageComponent implements OnInit {

  images: string[] = [
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq1.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq2.jpeg',
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq3.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq4.jpeg',
    'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq5.jpeg',
   'assets/sarvajanik-ganesh-slideshow/Ganeshotsav2024-seq6Pooja.jpeg',
    
  ];

currentIndex = 0;
isPlaying = false;
  intervalId: any = null;


  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  constructor() { }

  ngOnInit(): void {
  }
  togglePlay(): void {
    if (this.isPlaying) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else {
      this.intervalId = setInterval(() => this.next(), 2000); // change every 2 seconds
    }
    this.isPlaying = !this.isPlaying;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
