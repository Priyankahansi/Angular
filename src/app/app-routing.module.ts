import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './Mycomponent/first/first.component';
import { SecondComponent } from './Mycomponent/second/second.component';

const routes:Routes = [
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
