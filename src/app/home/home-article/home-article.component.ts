import { Component, OnInit } from '@angular/core';

export interface Article {
   title: string;
   rows: number;
   cols: number;
   color: string;
   subtitle: string;
   imgUrl: string;
   bgImgPosition: string;
   article: string;
 }

@Component({
   selector: 'app-home-article',
   templateUrl: './home-article.component.html',
   styleUrls: ['./home-article.component.scss']
})
export class HomeArticleComponent implements OnInit {

   public aArticles: Article[] = [
      { title: 'Ali',   rows: 8, cols: 12,   color: 'lightblue',  subtitle: 'VFX & Simulation',                imgUrl: './../../../assets/media/ali.jpg',   bgImgPosition: 'center',   article: 'Visual effects artists gravitate to Houdini because its procedural workflow is ideal for creating sophisticated particle and dynamic simulations. Effects are typically designed to react to actions taking place in a shot and a procedural solution “automates” these reactions providing studios with more creative control and more rapid turnaround.' },
      { title: '',      rows: 2, cols: 12,   color: 'white',  subtitle: 'VFX & Simulation',                imgUrl: '',                                  bgImgPosition: 'center',   article: 'Visual effects artists gravitate to Houdini because its procedural workflow is ideal for creating sophisticated particle and dynamic simulations. Effects are typically designed to react to actions taking place in a shot and a procedural solution “automates” these reactions providing studios with more creative control and more rapid turnaround.' },
      { title: 'Bruce', rows: 4, cols: 6,    color: 'lightgreen', subtitle: 'Shots & Multiple Iterations',     imgUrl: './../../../assets/media/bruce.jpg', bgImgPosition: 'center',   article: 'Houdini lets you make creative decisions deep into production as changes made to Houdini nodes cascade.' },
      { title: 'FIIT',  rows: 4, cols: 6,    color: 'lightpink',  subtitle: 'Pipeline in a Box',               imgUrl: './../../../assets/media/fiit.jpg',  bgImgPosition: 'top',      article: 'Whether you are setting up a shot or building a game level, Houdini lets you create tools that can be reused many times during a project’s life cycle. Instead of simply reacting to issues and problems, you will be able to plan ahead and visualize and refine your pipeline.' },

      { title: 'Ali',   rows: 3, cols: 3,    color: 'lightblue',  subtitle: 'VFX',                             imgUrl: './../../../assets/media/ali.jpg',   bgImgPosition: 'center',   article: 'Reactions providing studios with more.' },
      { title: 'Bruce', rows: 3, cols: 6,    color: 'lightgreen', subtitle: 'Multiple',                        imgUrl: './../../../assets/media/bruce.jpg', bgImgPosition: 'top',   article: 'Houdini lets you make creative decisions.' },
      { title: 'FIIT',  rows: 3, cols: 3,    color: 'lightpink',  subtitle: 'Box',                             imgUrl: './../../../assets/media/fiit.jpg',  bgImgPosition: 'center',   article: 'Instead of simply reacting.' },

      { title: 'FIIT',  rows: 4, cols: 8,    color: 'lightpink',  subtitle: 'Pipeline',                        imgUrl: './../../../assets/media/fiit.jpg',  bgImgPosition: 'top',      article: 'Instead of simply reacting to issues and problems.' },
      { title: 'Ali',   rows: 2, cols: 4,    color: 'lightblue',  subtitle: 'Simulation',                      imgUrl: './../../../assets/media/ali.jpg',   bgImgPosition: 'center',   article: 'Effects “automates” .' },
      { title: 'Bruce', rows: 2, cols: 4,    color: 'lightgreen', subtitle: 'Shots',                           imgUrl: './../../../assets/media/bruce.jpg', bgImgPosition: 'top',      article: 'Houdini lets you.' },

      { title: '',      rows: 2, cols: 2,    color: '',           subtitle: '',                                imgUrl: '',                                  bgImgPosition: 'center',   article: '' },
      { title: 'Skier', rows: 8, cols: 8,    color: 'lightgreen', subtitle: 'Shots',                           imgUrl: './../../../assets/media/skier.jpg', bgImgPosition: 'center',   article: 'Houdini lets you.' },
      { title: '',      rows: 2, cols: 2,    color: '',           subtitle: '',                                imgUrl: '',                                  bgImgPosition: 'center',   article: '' },
   ];

   /*----=| rows: length multiplied by view's rowHeight
            cols: how wide based on view's columns(ie.cols="12") |=---*/

   public viewColumns = '';
   public cols = 12;
   public divider = 1;

   public aArticlesGrid = [
      { title: 'Grid List', },
   ];

   public fGridConfigurator = () => {
      const newCol = this.cols / this.divider;
      this.viewColumns = newCol.toString();
      // console.log('this.viewColumns: ', this.viewColumns);
   }

   ngOnInit() {
      this.fGridConfigurator();
   }

}

