import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from './product-category.enum';
import { Product } from './product.model';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(value: Product[] | null, category: ProductCategory): Product[] {
    if (!value) return [];
    return category === ProductCategory.ALL ? value : value.filter(v => v.category === category);
  }
}
