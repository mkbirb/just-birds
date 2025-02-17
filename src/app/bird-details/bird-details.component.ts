import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bird-details',
  imports: [FormsModule],
  templateUrl: './bird-details.component.html',
  styleUrl: './bird-details.component.css'
})
export class BirdDetailsComponent implements OnInit {
  id: number | null = null;
  birdData: any;
  
  birdList = BIRDCATALOGLIST;

  birdQuantity: number = 1;

  constructor(private cartService: CartService){};

  
  // Get Current Route
  activeRoute = inject(ActivatedRoute);

  router = inject(Router);

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.birdData =  this.birdList.find(b => b.id === this.id);
  }

  backToCatalog() {
    this.router.navigateByUrl('/bird-catalog')
  }

  increment() {
    this.birdQuantity++;
  }

  decrement() {
    this.birdQuantity--;
  }

  addToCart() {
    // Check to see whether there is an Existing Cart

    if (this.birdData) {
      if (this.birdQuantity >= 1) {
        this.cartService.addToCart(this.birdData, this.birdQuantity);
        alert("Successfully added to Cart");
      }
      else {
        alert("Quantity needs to be at least 1");
      }
    }
    else {
      alert("Error: Cannot add to Cart, BirdData is Undefined");
      console.error('Error: birdData is undefined');
    }
  }

  preventNegative(event: KeyboardEvent) {
    if (event.key === '-') {
      // Stops Negative Sign being able to be typed by User
      event.preventDefault();
    }
  }
}
