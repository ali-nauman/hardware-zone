import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() addProduct = new EventEmitter<Product>();

  addToCart(p: Product) {
    this.addProduct.emit(p);
  }
}
