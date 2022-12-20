import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  standalone: true,
  imports: [BrowserModule, RouterModule],
})
export class NavigationBarComponent {
  links = [
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'Cart',
      link: '/cart',
    },
  ];
}
