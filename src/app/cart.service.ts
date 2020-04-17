import { Injectable } from '@angular/core';
import { CartItem } from './cart/CartItem';
import { Product } from './products/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  totalCost = 0;

  constructor() { }

  addToCart(product: Product) {
    let item = this.items.find(element => element.item.name == product.name);

    if (item != undefined) {
      item.quantity++;
    } else {
      let cartItem: CartItem = { item: product, quantity: 1 };
      this.items.push(cartItem);
    }

    this.totalCost += product.price;
  }

  getItems() {
    return this.items;
  }

  getTotalCost() {
    return this.totalCost;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
