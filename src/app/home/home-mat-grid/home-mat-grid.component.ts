import { Component, OnInit, HostListener } from '@angular/core';



export interface Article {
   title: string;
   rows: number;
   cols: number;
   color: string;
   subtitle: string;
   imgUrl: string;
   article: string;
 }
@Component({
  selector: 'app-home-mat-grid',
  templateUrl: './home-mat-grid.component.html',
  styleUrls: ['./home-mat-grid.component.scss']
})
export class HomeMatGridComponent implements OnInit {

   public screenWidth: number;
   public viewColumns = '';
   public cols = 12;
   public divider = 1;
   public colWidth: number; // = 12;
   public c12 = 12;
   public c10 = 10;
   public c6 = 6;

   public aArticlesGrid = [
      { title: 'Grid List', },
   ];

   public aRow = [8, 4, 4];
   public aCols = [6, 6, 6];
   public titleFontSize = '1.2rem'; // ['1.2rem', '1rem', '.8rem'];
   public subTitleFontSize = '1rem'; // ['1.2rem', '1rem', '.8rem'];
   public infoFontSize = '.8rem'; // ['1rem', '.8rem', '.6rem'];

   public aArticles: Article[] = [];

   public fArticles() {
      this.aArticles = [
         { title: 'Ali',   rows: this.aRow[0], cols: this.aCols[0], color: 'lightblue',  subtitle: 'VFX & Simulation',              imgUrl: './../../../assets/media/ali.jpg',   article: 'Visual effects artists gravitate to Houdini because its procedural workflow is ideal for creating sophisticated particle and dynamic simulations. Effects are typically designed to react to actions taking place in a shot and a procedural solution “automates” these reactions providing studios with more creative control and more rapid turnaround.' },
         { title: 'Bruce', rows: this.aRow[1], cols: this.aCols[1], color: 'lightgreen', subtitle: 'Shots & Multiple Iterations',   imgUrl: './../../../assets/media/bruce.jpg', article: 'Houdini lets you make creative decisions deep into production as changes made to Houdini nodes cascade.' },
         { title: 'FIIT',  rows: this.aRow[2], cols: this.aCols[2], color: 'lightpink',  subtitle: 'Pipeline in a Box',             imgUrl: './../../../assets/media/fiit.jpg',  article: 'Whether you are setting up a shot or building a game level, Houdini lets you create tools that can be reused many times during a project’s life cycle. Instead of simply reacting to issues and problems, you will be able to plan ahead and visualize and refine your pipeline.' },

         { title: 'Ali',   rows: 3, cols: 3, color: 'lightblue',  subtitle: 'VFX',              imgUrl: './../../../assets/media/ali.jpg',   article: 'Reactions providing studios with more.' },
         { title: 'Bruce', rows: 3, cols: 6, color: 'lightgreen', subtitle: 'Multiple',   imgUrl: './../../../assets/media/bruce.jpg', article: 'Houdini lets you make creative decisions.' },
         { title: 'FIIT',  rows: 3, cols: 3, color: 'lightpink',  subtitle: 'Box',             imgUrl: './../../../assets/media/fiit.jpg',  article: 'Instead of simply reacting.' },

         { title: 'FIIT',  rows: 4, cols: 8, color: 'lightpink',  subtitle: 'Pipeline',             imgUrl: './../../../assets/media/fiit.jpg',  article: 'Instead of simply reacting to issues and problems.' },
         { title: 'Ali',   rows: 2, cols: 4, color: 'lightblue',  subtitle: 'Simulation',              imgUrl: './../../../assets/media/ali.jpg',   article: 'Effects “automates” .' },
         { title: 'Bruce', rows: 2, cols: 4, color: 'lightgreen', subtitle: 'Shots',   imgUrl: './../../../assets/media/bruce.jpg', article: 'Houdini lets you.' },

         { title: '',      rows: 2, cols: 2, color: '',           subtitle: '',        imgUrl: '', article: '' },
         { title: 'Skier', rows: 8, cols: 8, color: 'lightgreen', subtitle: 'Shots',   imgUrl: './../../../assets/media/skier.jpg', article: 'Houdini lets you.' },
         { title: '',      rows: 2, cols: 2, color: '',           subtitle: '',        imgUrl: '', article: '' },
      ];
   }

   /*----=| rows: length multiplied by view's rowHeight
            cols: how wide based on view's columns(ie.cols="12") |=---*/



   ngOnInit() {
      this.fGridConfigurator();
      this.fResizeMe();
      // this.fArticles();
      console.log('this.aArticles: ',this.aArticles);
   }

   public fGridConfigurator = () => {
      const newCol = this.cols / this.divider;
      this.viewColumns = newCol.toString();
      // console.log('this.viewColumns: ', this.viewColumns);
   }

   /*-================================
		Viewport Resize: media queries
	===================================-*/
   @HostListener('window:resize', ['$event'])
   //  @HostListener(this._windowRef._window(), ['$event'])
   onResize(event) {
       this.fResizeMe();
   }

   /*-=========================================
     fResizeMe() = screen resizing for:
     • Hamburger menu: small screen
     • Horizontal nav bar: larger screen
     • HTML trigger: *ngIf="displayHamburger
  =============================================-*/
   public fResizeMe() {
       this.screenWidth = window.innerWidth;
       this.fArticles();
       if (this.screenWidth >= 900) {
         // this.colWidth = 6;
         this.aRow = [8, 4, 4];
         this.aCols = [6, 6, 6];
         //   this.displayHamburger = false;
         //   this.showLogo = true;
         //   this.showMobile = false;
       } else {
         // this.colWidth = 12;
         this.aRow = [4, 4, 4];
         this.aCols = [12, 12, 12];
         this.titleFontSize = '1rem';
         this.subTitleFontSize = '.8rem';
         this.infoFontSize = '.6rem';
         //   this.displayHamburger = true;
         //   this.showLogo = false;
         //   this.showMobile = true;
       }
      //  console.log('this.screenWidth: ',this.screenWidth);
      //  console.log('this.colWidth: ',this.colWidth);
   }
}
