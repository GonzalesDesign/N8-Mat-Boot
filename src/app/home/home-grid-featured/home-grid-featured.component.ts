import { Component, OnInit } from '@angular/core';

export interface Tile {
   color: string;
   cols: number;
   rows: number;
   text: string;
}

@Component({
   selector: 'app-home-grid-featured',
   templateUrl: './home-grid-featured.component.html',
   styleUrls: ['./home-grid-featured.component.scss']
})
export class HomeGridFeaturedComponent implements OnInit {
   public aCards = [
      { title: 'ali', imgUrl: './../../../assets/media/ali.jpg' },
      { title: 'bruce', imgUrl: './../../../assets/media/bruce.jpg' },
      { title: 'fiit', imgUrl: './../../../assets/media/fiit.jpg' },
      { title: 'skier', imgUrl: './../../../assets/media/skier.jpg' }
   ];

   public tiles: Tile[] = [
      { text: 'One', rows: 1, cols: 3, color: 'lightblue' },
      { text: 'Two', rows: 2, cols: 1, color: 'lightgreen' },
      { text: 'Three', rows: 1, cols: 1, color: 'lightpink' },
      { text: 'Four', rows: 1, cols: 2, color: '#DDBDF1' }
   ];

   constructor() {}

   ngOnInit() {}
}
