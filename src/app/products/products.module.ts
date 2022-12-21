import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductsComponent } from '.';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
