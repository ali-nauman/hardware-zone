import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../data/mock-products';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  activeItemClass = "list-group-item list-group-item-action active";
  currentFilter = "All";
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
    this.currentFilter = filter;

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