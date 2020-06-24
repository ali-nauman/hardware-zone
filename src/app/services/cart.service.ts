import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor() { }

  addToCart(product: Product): void {
    let item = this.items.find(element => element.product.name === product.name);

    if (item != undefined) {
      ++item.quantity;
    } else {
      let cartItem: CartItem = { product: product, quantity: 1 };
      this.items.push(cartItem);
    }
  }

  clearCart(): void {
    this.items = [];
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalCost(): number {
    return this.items.reduce((interimTotal, item) => interimTotal + item.product.price * item.quantity, 0);
  }

  getTotalItemsCount(): number {
    return this.items.reduce((interimTotalCount, item) => interimTotalCount + item.quantity, 0);
  }

  isCartEmpty(): boolean {
    return this.items.length === 0;
  }
}