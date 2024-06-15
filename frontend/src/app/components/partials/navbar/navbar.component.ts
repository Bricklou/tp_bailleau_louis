import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Menu,
  Search,
  ShoppingBasket,
  ShoppingCart,
  User,
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly icons = {
    Menu,
    Search,
    ShoppingCart,
    User,
    ShoppingBasket,
  };
}
