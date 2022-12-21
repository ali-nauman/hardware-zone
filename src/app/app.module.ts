import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NavigationBarComponent } from './shared';

@NgModule({
  declarations: [AppComponent, CartPageComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationBarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
