import { Product } from '../products/Product';

export interface CartItem {
    item: Product;
    quantity: number;
}