import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabloIILayoutComponent } from './diabloII/diabloII-layout.component';
import { DiabloIIComponent } from './diabloII/diabloII.component';
import { HearthstoneLayoutComponent } from './hearthstone/hearthstone-layout.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { VanguardLayoutComponent } from './vanguard/vanguard-layout.component';
import { WarzoneLayoutComponent } from './warzone/warzone-layout.component';


const routes: Routes = [
  {path: 'home', component: LayoutMainComponent},
  {path: 'diabloII', component: DiabloIILayoutComponent},
  {path: 'warzone', component: WarzoneLayoutComponent},
  {path: 'hearthstone', component: HearthstoneLayoutComponent},
  {path: 'vanguard', component: VanguardLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
