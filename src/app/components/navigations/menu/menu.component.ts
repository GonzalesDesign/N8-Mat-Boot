import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../../../services/menu-data.service';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   public aComponentsMenu = [];

   constructor(private _menuData: MenuDataService) {
   }

   ngOnInit() {
      this.aComponentsMenu = this._menuData.aComponentsMenu;
   }


   // public aComponentsMenu = [
   //    {  title: 'Home',
   //       subMenu: [
   //          { name: 'Home', link: '/home' }
   //       ]
   //    },
   //    {  title: 'Layout',
   //       subMenu: [
   //          { name: 'Typography', link: '/typography' },
   //          { name: 'Card', link: '/card' },
   //          { name: 'Stepper', link: '/stepper' },
   //       ]
   //    },
   //    {  title: 'Buttons & Indicators',
   //       subMenu: [
   //          { name: 'Buttons', link: '/buttons' },
   //          { name: 'Icons', link: '/icons' },
   //          { name: 'Spinner', link: '/spinner' },
   //          { name: 'Badges', link: '/badges' },
   //       ]
   //    },
   //    {  title: 'Form Controls',
   //       subMenu: [
   //          { name: 'Input', link: '/Input' },
   //          { name: 'Form Field', link: '/formField' },
   //          { name: 'Date Picker', link: '/datePicker' },
   //       ]
   //    },
   //    {  title: 'Popups & Modals',
   //       subMenu: [
   //          { name: 'Modal', link: '/modal' },
   //          { name: 'Dialog', link: '/dialog' },
   //       ]
   //    },
   // ];
}
