import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { CartService } from '../cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  filteredProducts = PRODUCTS;
  productCategories: string[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productCategories = new Array();
    this.productCategories.push("All");
    PRODUCTS.forEach(p => {
      if (this.productCategories.indexOf(p.category) == -1) {
        this.productCategories.push(p.category);
      }
    });
  }

  addToCart(product: Product): void {
    --product.quantity;
    this.cartService.addToCart(product);
  }

  filterProducts(filter: string): void {
    if (filter == "All") {
      this.filteredProducts = PRODUCTS;
    } else {
      this.filteredProducts = new Array();
      PRODUCTS.forEach(product => {
        if (product.category == filter) {
          this.filteredProducts.push(product);
        }
      });
    }
  }
}