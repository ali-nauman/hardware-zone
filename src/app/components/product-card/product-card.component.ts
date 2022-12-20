import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    --product.stockSize;
    this.cartService.addToCart(product);
  }
}
