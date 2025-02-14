import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-notification',
  imports: [],
  templateUrl: './cart-notification.component.html',
  styleUrl: './cart-notification.component.css'
})
export class CartNotificationComponent implements OnInit {

  cartCount: number = 0;

  constructor(private cartService: CartService, private router: Router){};

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart.reduce((amount, product) => amount + product.quantity, 0);
    }) 
  }

  toCart() {
    this.router.navigateByUrl('/cart');
  }

}
