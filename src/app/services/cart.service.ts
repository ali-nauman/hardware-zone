import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  totalCost = 0;

  constructor() { }

  addToCart(product: Product): void {
    let item = this.items.find(element => element.item.name == product.name);

    if (item != undefined) {
      item.quantity++;
    } else {
      let cartItem: CartItem = { item: product, quantity: 1 };
      this.items.push(cartItem);
    }

    this.totalCost += product.price;
  }

  clearCart(): void {
    this.items = [];
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalCost() {
    return this.totalCost;
  }

  getTotalItemsCount(): number {
    let totalCount = 0;

    this.items.forEach(i => {
      totalCount += i.quantity;
    });

    return totalCount;
  }
}