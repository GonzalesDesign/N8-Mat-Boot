import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-home-grid-featured></app-home-grid-featured>
     <span style="padding: 20px;"></span>
     <app-home-mat-grid></app-home-mat-grid>
     <app-home-article></app-home-article>
  `,
  styles: [
   `.title {
      @include fontFamilyWeightSizeColor (var(--rlg-font-OpenSans), 600, 1em, var(--mat-color-secondary));
      font-family: var(--rlg-font-OpenSans);
      font-size: 3rem;
      color: var(--mat-color-tertiary);
   }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
