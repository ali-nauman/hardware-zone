import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from '../app/components/cart-page/cart-page.component';
import { ProductsPageComponent } from '../app/components/products-page/products-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
