import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems = [];
  totalCost: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalCost = 0;
  }
}
