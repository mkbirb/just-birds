import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
    cart: any[] = [];
    constructor(private cartService: CartService, private router: Router){};

    finalPrice: number = 0;

    noItemsPicture = 'assets/images/empty-cart.png'

    ngOnInit(): void {
      this.cartService.cart$.subscribe(items => {
        this.cart = items;
      })
      this.calculateFinalPrice();
    }

    toCatalog() {
      this.router.navigateByUrl('/bird-catalog');
    }

    calculateFinalPrice() {
      this.finalPrice = this.cart.reduce((sum, product) => sum + (product.item.price * product.quantity), 0);
    }

    removeItem(index: number) {
      this.cartService.removeItem(index);
    }

    viewItem(productId: number) {
      this.router.navigateByUrl(`/bird/${productId}`);
    }

    clearAll() {
      this.cartService.clearCart();
      alert("You have Cleared the Cart");
    }
}
