import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private storageAvailable: boolean;


  private cartSource = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSource.asObservable();

  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: object) { 

    // Check if we are running in a Browser
    this.storageAvailable = isPlatformBrowser(this.platformId);

    // Loads the Cart when it is initialised by other Components
    this.loadCart();
  }

  getUserStorageKey(): string {
    const user = this.authService.getCurrentUsername();

    // Saves the Users Cart Items based on their Username in Local Storage
    return `cart_${user}`;
  }

  loadCart() {
    if (this.storageAvailable) {
      const savedCart = localStorage.getItem(this.getUserStorageKey());
      this.cart = savedCart ? JSON.parse(savedCart) : [];
      this.cartSource.next(this.cart);
    } else {
      console.warn('LocalStorage is not available.');
      this.cart = [];
    }

  }

  addToCart(item: any, quantity: number) {
    let existingItem = this.cart.find(cartItem => cartItem.item.name == item.name);

    // Checks if Existing Item exists
    if (existingItem) {
      //Increment the Quantity instead if the Item already exists in the Cart
      existingItem.quantity += quantity;
    }
    else {
      this.cart.push({item, quantity});
    }

    this.saveCart();

    this.cartSource.next(this.cart);
  }

  saveCart() {
    localStorage.setItem(this.getUserStorageKey(), JSON.stringify(this.cart));
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.saveCart();

    // Update and Inform the Subscribers.
    this.cartSource.next(this.cart);
  }


  clearCart() {
    this.cart = [];
    localStorage.removeItem(this.getUserStorageKey());
    this.cartSource.next(this.cart);
  }


}
