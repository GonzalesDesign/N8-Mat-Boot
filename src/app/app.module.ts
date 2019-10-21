/*-----=| Modules |=-----*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

/*-----=| Components |=-----*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './components/navigations/top-bar/top-bar.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidenavComponent } from './components/navigations/sidenav/sidenav.component';
import { MenuComponent } from './components/navigations/menu/menu.component';
import { MainNavComponent } from './components/navigations/main-nav/main-nav.component';
import { HomeGridFeaturedComponent } from './home/home-grid-featured/home-grid-featured.component';
import { HomeArticleComponent } from './home/home-article/home-article.component';
import { HomeMatGridComponent } from './home/home-mat-grid/home-mat-grid.component';
import { CardComponent } from './components/layout/card/card.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { TypoComponent } from './components/layout/typo/typo.component';
import { BootstrapComponent } from './components/layout/bootstrap/bootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    BadgesComponent,
    SpinnerComponent,
    SidenavComponent,
    MenuComponent,
    MainNavComponent,
    HomeGridFeaturedComponent,
    HomeArticleComponent,
    HomeMatGridComponent,
    CardComponent,
    GridComponent,
    TypoComponent,
    BootstrapComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
