import { Component } from '@angular/core';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';

@Component({
  selector: 'app-bird-catalog',
  imports: [],
  templateUrl: './bird-catalog.component.html',
  styleUrl: './bird-catalog.component.css'
})
export class BirdCatalogComponent {
  productList = BIRDCATALOGLIST
}
