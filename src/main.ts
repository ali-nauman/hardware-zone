import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      {
        path: 'products',
        loadComponent: () => import('./app/products/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'cart',
        loadComponent: () => import('./app/cart/cart/cart.component').then(m => m.CartComponent),
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ]),
  ],
});
