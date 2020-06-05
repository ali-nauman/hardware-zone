import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hardware Zone';
  cartService: CartService;
  cartItemCount = 0;

  constructor(cartService: CartService) {
    this.cartService = cartService;

    setInterval(() => {
      this.cartItemCount = cartService.getTotalItemsCount();
    }, 1);
  }
}
