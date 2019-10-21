import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
   selector: 'app-top-bar',
   templateUrl: './top-bar.component.html',
   styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

   public showHamburger: boolean;
   public screenWidth: number;

   public aMenu = [
      { name: 'Home', link: '/' },
      { name: 'Layout', link: '/typography' },
      { name: 'Buttons', link: '/buttons' },
      { name: 'Icons', link: '/icons' },
      { name: 'Badges', link: '/badges' },
      { name: 'Spinner', link: '/spinner' },
      { name: 'Navigations', link: '/navigations' },
      { name: 'SideNav', link: '/sidenav' },
      { name: 'Menu', link: '/menu' },
      { name: 'Form', link: '/' },
   ];

   ngOnInit() {
      this.fResizeMe();
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
     • HTML trigger: *ngIf="showHamburger
  =============================================-*/
   public fResizeMe() {
       this.screenWidth = window.innerWidth;
       if (this.screenWidth >= 700) {
           this.showHamburger = false;
       } else {
           this.showHamburger = true;
       }
   }

}

