import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

import { ProductCategory } from './product-category.enum';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Product[]>('/assets/products.json');
  }

  getByCategory(category: ProductCategory) {
    return (
      this.httpClient
        .get<Product[]>('/assets/products.json')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .pipe(filter(products => products.filter(p => p.category === category)))
    );
  }
}
