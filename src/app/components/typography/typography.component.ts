import { Component, HostListener, OnInit } from '@angular/core';

@Component({
   selector: 'app-typography',
   templateUrl: './typography.component.html',
   styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
   public screenWidth: number;
   public aRow = [5, 3, 2, 2];
   public aColWidth = [6, 6, 3, 3];

   ngOnInit() {
      this.fResizeMe();
   }

   @HostListener('window:resize', ['$event'])
   onResize(event) {
      this.fResizeMe();
   }

   public fResizeMe() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth >= 900) {
         this.aRow = [5, 3, 2, 2];
         this.aColWidth = [6, 6, 3, 3];
      } else {
         this.aRow = [5, 3, 2, 2];
         this.aColWidth = [12, 12, 12, 12];
      }
   }
}
