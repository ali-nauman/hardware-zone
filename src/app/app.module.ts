import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NavigationBarComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    CartPageComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NavigationBarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
