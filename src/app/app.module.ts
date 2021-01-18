import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BasketComponent } from './basket/basket.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HomeComponent,AppComponent,BasketComponent,PizzalistComponent,HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
