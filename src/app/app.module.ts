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
import { DiabloIIComponent } from './diabloII/diabloII.component';
import { DiabloIILayoutComponent } from './diabloII/diabloII-layout.component';
import { WarzoneComponent } from './warzone/warzone.component';
import { WarzoneLayoutComponent } from './warzone/warzone-layout.component';
import { HearthstoneLayoutComponent } from './hearthstone/hearthstone-layout.component';
import { HearthstoneComponent } from './hearthstone/hearthstone.component';
import { VanguardComponent } from './vanguard/vanguard.component';
import { VanguardLayoutComponent } from './vanguard/vanguard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { FormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './login/login-layout.component';
import { LoginComponent } from './login/login.component';
import { LoginInfoComponent } from './body/edit-user-info.component';


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
    FeaturedCardComponent,
    DiabloIIComponent,
    DiabloIILayoutComponent,
    WarzoneComponent,
    WarzoneLayoutComponent,
    HearthstoneLayoutComponent,
    HearthstoneComponent,
    VanguardComponent,
    VanguardLayoutComponent,
    UserInfoComponent,
    LoginInfoComponent,
    LoginLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
