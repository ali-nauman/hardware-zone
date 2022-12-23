import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CartItem } from '.';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: Product): void {
    const items = this.items$.getValue();

    const item = items.find(i => i.product.name === product.name);

    if (item !== undefined) {
      ++item.quantity;
    } else {
      const cartItem: CartItem = { product: product, quantity: 1 };
      items.push(cartItem);
    }

    this.items$.next(items);
  }

  clearCart(): void {
    this.items$.next([]);
  }

  getItems(): Observable<CartItem[]> {
    return this.items$.asObservable();
  }

  getTotalCost(): number {
    return this.items$.getValue().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getTotalItemsCount(): number {
    return this.items$.getValue().reduce((sum, item) => sum + item.quantity, 0);
  }

  isCartEmpty(): boolean {
    return !this.items$.getValue().length;
  }
}
