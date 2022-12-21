import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart/cart.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {
    path: '/products',
    component: ProductsComponent,
  },
  {
    path: '/cart',
    component: CartComponent,
  },
  {
    path: '',
    redirectTo: '/products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
