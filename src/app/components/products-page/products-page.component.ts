import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../data/mock-products';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {
  activeItemClass = "list-group-item list-group-item-action active";
  categoryFilter = "All";
  products: Product[] = [];
  productCategories: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS;
    this.productCategories.push("All");

    PRODUCTS.forEach(p => {
      if (this.productCategories.indexOf(p.category) === -1) {
        this.productCategories.push(p.category);
      }
    });
  }

  filterByCategory(category: string): void {
    this.categoryFilter = category;

    if (category == "All") {
      this.products = PRODUCTS;
    } else {
      this.products = PRODUCTS.filter(product => product.category === category);
    }
  }
}