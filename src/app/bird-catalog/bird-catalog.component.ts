import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bird-catalog',
  imports: [FormsModule, NgxPaginationModule, CommonModule],
  templateUrl: './bird-catalog.component.html',
  styleUrl: './bird-catalog.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BirdCatalogComponent implements OnInit {
  noProducts = 'assets/images/no-products.png'

  productList = [...BIRDCATALOGLIST];

  // Initialise the Filtered List that would appear based on what the User Searched
  searchedList = [...BIRDCATALOGLIST];

  searchInput = '';

  // Set Default to Alphabetical
  sortOption = 'alphabetical';

  // For the Pagination
  currentPage = 1;

  itemsPerPage = 9;

  ngOnInit(): void {
    this.sortProducts();
  }

  //Searches based on User Input
  searchProduct() {
    this.searchedList = this.productList.filter(bird =>
      bird.name.toLowerCase().includes(this.searchInput.toLowerCase()));

    // Done so Sorting is done after the Searching
    if (this.searchedList.length > 0) {
      this.sortProducts();
    }
  }

  sortProducts() {
    // If there's a search input, filter the list
    if (this.searchInput.trim() === '') {
      // Reset Searched List if there is nothing being searched
      this.searchedList = [...this.productList];
    }
  
    if (this.sortOption === 'alphabetical') {
      this.searchedList =  this.searchedList.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if (this.sortOption === 'cheapest'){
      this.searchedList =  this.searchedList.sort((a,b) => a.price - b.price)
    }
    else if (this.sortOption === 'highest') {
      this.searchedList =  this.searchedList.sort((a,b) => b.price - a.price);
    }
  }

  searchReset() {
    this.searchInput = "";

    // Reset the Searched List
    this.searchedList = this.productList;
  }
}
