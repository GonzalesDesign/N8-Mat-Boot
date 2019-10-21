import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidenavComponent } from './components/navigations/sidenav/sidenav.component';
import { MenuComponent } from './components/navigations/menu/menu.component';
import { CardComponent } from './components/layout/card/card.component';
import { BootstrapComponent } from './components/layout/bootstrap/bootstrap.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'typography', component: TypographyComponent },
   { path: 'card', component: CardComponent },
   { path: 'bootstrap', component: BootstrapComponent },
   { path: 'buttons', component: ButtonsComponent },
   { path: 'icons', component: IconsComponent },
   { path: 'spinner', component: SpinnerComponent },
   { path: 'badges', component: BadgesComponent },
   { path: 'navigations', component: HomeComponent },
   { path: 'sidenav', component: SidenavComponent },
   { path: 'menu', component: MenuComponent },
   { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
