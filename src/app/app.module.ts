import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart';
import { ProductsModule } from './products';
import { NavigationBarComponent } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationBarComponent, ProductsModule, CartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
