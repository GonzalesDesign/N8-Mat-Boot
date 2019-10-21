import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface MenuDataInterface {
   title: string;
   subMenu: Array<SubmenuInterface>;
}
export interface SubmenuInterface {
   name: string;
   link: string;
}

class MenuDataClass {
   title: string;
   subMenu: [];
   name: string;
   link: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

   public aComponentsMenu: MenuDataInterface[] = [
      {  title: 'Home',
         subMenu: [
            { name: 'Home', link: '/home' }
         ]
      },
      {  title: 'Layout',
         subMenu: [
            { name: 'Grid List', link: '/' },
            { name: 'Typography', link: '/typography' },
            { name: 'Card', link: '/card' },
            { name: 'Bootstrap', link: '/bootstrap' },
            { name: 'Stepper', link: '/stepper' },
         ]
      },
      {  title: 'Buttons',
         subMenu: [
            { name: 'Buttons', link: '/buttons' },
            { name: 'Icons', link: '/icons' },
            { name: 'Spinner', link: '/spinner' },
            { name: 'Badges', link: '/badges' },
         ]
      },
      {  title: 'Forms',
         subMenu: [
            { name: 'Input', link: '/Input' },
            { name: 'Form Field', link: '/formField' },
            { name: 'Date Picker', link: '/datePicker' },
         ]
      },
      {  title: 'Popups',
         subMenu: [
            { name: 'Modal', link: '/modal' },
            { name: 'Dialog', link: '/dialog' },
         ]
      },
   ];

}
