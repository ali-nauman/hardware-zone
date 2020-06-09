import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  displayItemCount: boolean;
  itemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.displayItemCount = !this.cartService.isCartEmpty();

    if (!this.displayItemCount) { this.itemCount = this.cartService.getTotalItemsCount(); }
  }

}
