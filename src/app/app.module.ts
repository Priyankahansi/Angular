import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './Mycomponent/first/first.component';
import { SecondComponent } from './Mycomponent/second/second.component';
import { AppRoutingModule } from './app-routing.module';

const routes:Routes = [
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
