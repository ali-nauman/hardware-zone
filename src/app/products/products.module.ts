import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
