import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';

@Component({
  selector: 'app-bird-catalog',
  imports: [FormsModule],
  templateUrl: './bird-catalog.component.html',
  styleUrl: './bird-catalog.component.css'
})
export class BirdCatalogComponent {
  noProducts = 'assets/images/no-products.png'

  productList = BIRDCATALOGLIST;

  // Initialise the Filtered List that would appear based on what the User Searched
  searchedList = BIRDCATALOGLIST;

  searchInput = '';

  //Searches based on User Input
  searchProduct(event: any) {
    const query = event.target.value.toLowerCase();

    this.searchedList = this.productList.filter(bird => bird.name.toLowerCase().includes(query));
  }

  searchReset() {
    this.searchInput = "";

    // Reset the Searched List
    this.searchedList = this.productList;
  }
}
