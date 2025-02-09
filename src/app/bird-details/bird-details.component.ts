import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';

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
}
