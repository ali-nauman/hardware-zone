import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
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
