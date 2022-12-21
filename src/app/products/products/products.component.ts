import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart';
import { ProductCategory } from '../product-category.enum';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  productCategories: ProductCategory[] = Object.values(ProductCategory);

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productsService.get();
  }

  onFilterClick(category: ProductCategory) {
    this.products$ = this.productsService.getByCategory(category);
  }

  onAddProduct(product: Product) {
    this.cartService.addToCart(product);
  }
}
