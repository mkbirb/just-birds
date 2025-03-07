import { Component, inject } from '@angular/core';
import { BIRDCATALOGLIST } from '../birdCatalog/BirdCatalogList';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent {
  loveBirds = 'assets/images/love-birds.png';
  cockatoo = 'assets/images/cockatoo.png';
  petCertificate = 'assets/images/pet-certificate.png';

  birdList = BIRDCATALOGLIST;

  // Displays the reasons why Just Birds should be chosen by the User
  listOfWhys = [
    {description: "Cheap birds looking for loving owners!", image: this.loveBirds},
    {description: "We have a large catalog of many different species of Birds!", image: this.cockatoo},
    {description: "Gain your Pet Bird Certificate with ease!", image: this.petCertificate}
  ];

  router = inject(Router);

  toBirdCatalog() {
    this.router.navigate(['/bird-catalog']);
  }
}
