import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }
  images = ['heading 1', 'heading 2', 'heading 3'].map((n) => `../../assets/img/${n}.png`);
  
  ngOnInit(): void {
  }

}
