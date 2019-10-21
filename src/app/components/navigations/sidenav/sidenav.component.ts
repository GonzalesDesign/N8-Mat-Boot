import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../../../services/menu-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

   public opened = false;
   public aMenuData = [];

   constructor(private _menuData: MenuDataService) {

   }

   ngOnInit() {
      const test = this._menuData.aComponentsMenu;
      console.log('test: ', test);
      this.aMenuData = this._menuData.aComponentsMenu;
   }



}
