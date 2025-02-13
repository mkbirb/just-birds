import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
    cart: any[] = [];
    constructor(private cartService: CartService){};

    ngOnInit(): void {
      this.cartService.cart$.subscribe(items => {
        this.cart = items;
      })
    }

    removeItem(index: number) {
      this.cartService.removeItem(index);
    }

    clearAll() {
      this.cartService.clearCart();
      alert("You have Cleared the Cart");
    }
}
