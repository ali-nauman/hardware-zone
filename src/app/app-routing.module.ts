import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from '../app/components/products-page/products-page.component';
import { CartPageComponent } from '../app/components/cart-page/cart-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent
}, {
  path: 'products',
  component: ProductsPageComponent
}, {
  path: 'cart',
  component: CartPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }