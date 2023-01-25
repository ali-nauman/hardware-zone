import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavigationBarComponent, RouterModule],
})
export class AppComponent {
  title = 'Hardware Zone';
}
