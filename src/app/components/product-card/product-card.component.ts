import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    --product.quantity;
    this.cartService.addToCart(product);
  }
}
