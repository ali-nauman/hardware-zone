import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FilterByCategoryPipe } from '.';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent, FilterByCategoryPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
