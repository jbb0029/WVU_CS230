import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: 'home', component: BodyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    
  ]
})
export class AppRoutingModule { }
