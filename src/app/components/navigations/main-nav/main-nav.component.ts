import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuDataService } from 'src/services/menu-data.service';


@Component({
   selector: 'app-main-nav',
   templateUrl: './main-nav.component.html',
   styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

   public aMenuData = [];

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
         map(result => result.matches),
         shareReplay()
      );

   constructor(private breakpointObserver: BreakpointObserver,
               private _menuData: MenuDataService) { }

   ngOnInit() {
      this.aMenuData = this._menuData.aComponentsMenu;
   }

}
