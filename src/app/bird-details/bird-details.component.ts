import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bird-details',
  imports: [],
  templateUrl: './bird-details.component.html',
  styleUrl: './bird-details.component.css'
})
export class BirdDetailsComponent implements OnInit {
  id: number | null = null;
  birdData: any;
  
  birdList = BIRDCATALOGLIST;

  birdQuantity = 0;

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
      this.cartService.addToCart(this.birdData, this.birdQuantity);
      alert("Successfully added to Cart");
    }
    else {
      alert("Cannot add to Cart");
      console.error('Error: birdData is undefined');
    }
  }
}
