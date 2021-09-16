import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { Nav2Component } from './nav2/nav2.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedCardComponent } from './featured/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Nav2Component,
    FooterComponent,
    CarouselComponent,
    GamesComponent,
    BodyComponent,
    LayoutMainComponent,
    RecommendedComponent,
    FeaturedComponent,
    FeaturedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
