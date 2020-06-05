import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  totalCost: number;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getItems();
    this.totalCost = 0;
  }
}