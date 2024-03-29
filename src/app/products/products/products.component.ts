import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart';
import { FilterByCategoryPipe } from '../filter-by-category.pipe';
import { ProductCategory } from '../product-category.enum';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FilterByCategoryPipe],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  productCategories: ProductCategory[] = Object.values(ProductCategory);
  selectedCategory = ProductCategory.ALL;

  constructor(private cartService: CartService, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.get();
  }

  onFilterClick(category: ProductCategory) {
    this.selectedCategory = category;
  }

  onAddProduct(product: Product) {
    this.cartService.addToCart(product);
  }
}
