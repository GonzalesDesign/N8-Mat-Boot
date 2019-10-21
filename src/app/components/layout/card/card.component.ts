import { Component, OnInit, HostListener } from '@angular/core';

export interface CardsInterface {
   title: string;
   author: string;
   bgColor: string;
   imgUrl: string;
   size: string;
   avatar: string;
   info: string;
}

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
   public screenWidth: number;
   public aCards: CardsInterface[] = [];

   /*---=| Grid: Rows and Columns |=-------------------------------------=
   =--- run these values in for media queries: breakpoints observer |=---*/
   public aRows = [4, 3, 3, 0, 3, 0]; // each grid heights
   public aCols = [12, 6, 6, 2, 8, 2]; // each grid widths
   public aImgHeights = [900, 500, 400, 0, 600, 0];

   constructor() {}

   ngOnInit() {
      this.fCardsData();
      this.fResizeMe();
   }

   public fCardsData() {
      this.aCards = [
         { title: 'nba',      author: 'Michael Jordan',  bgColor: 'palegreen',      imgUrl: './../../../../assets/media/jordan.jpg',   size: 'cover',    avatar: './../../../../assets/media/avatar3.jpg',  info: 'Material Grid gives you the ability to control both row and column for each grid box. Breakpoints are set in the class component.'},
         { title: 'nba',      author: 'LeBron James',    bgColor: 'palevioletred',  imgUrl: './../../../../assets/media/leBron.jpg',   size: 'cover',    avatar: './../../../../assets/media/avatar2.jpg',  info: 'Control over image\'s height, width and size and other aspects of the grid box.'},
         { title: 'soccer',   author: 'Sadio Mane',      bgColor: 'palegoldenrod',  imgUrl: './../../../../assets/media/soccer.jpg',   size: 'cover',    avatar: './../../../../assets/media/avatar1.jpg',  info: 'Control over image\'s height, width and size..'},
         { title: '',         author: '',                bgColor: '',               imgUrl: '',                                        size: '',         avatar: '',                                        info: '' },
         { title: 'boxing',   author: 'Clacius Clay',    bgColor: 'paleturquoise',  imgUrl: './../../../../assets/media/ali.jpg',      size: 'cover',    avatar: './../../../../assets/media/avatar3.jpg',  info: 'This grid box sits in-between grids with no data. Column width at 8 and 2 columns on each side.'},
         { title: '',         author: '',                bgColor: '',               imgUrl: '',                                        size: '',         avatar: '',                                        info: '' }
      ];
   }

   public fResizeMe() {
      this.screenWidth = window.innerWidth;
      this.fCardsData();
      if (this.screenWidth >= 900) {
         this.aRows = [4, 3, 3, 0, 3, 0];
         this.aCols = [12, 6, 6, 2, 8, 2];
         this.aImgHeights = [900, 500, 400, 0, 600, 0];
      } else {
         this.aRows = [2, 2, 2, 0, 2, 0];
         this.aCols = [12, 12, 12, 0, 12, 0];
         this.aImgHeights = [300, 300, 300, 0, 300, 0];
      }
   }

   @HostListener('window:resize', ['$event'])
   onResize(event) {
       this.fResizeMe();
   }


}
