import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BirdCatalogComponent } from './bird-catalog/bird-catalog.component';
import { BirdDetailsComponent } from './bird-details/bird-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bird-catalog', component: BirdCatalogComponent},
  { path: 'bird/:id', component: BirdDetailsComponent},
  { path: '**', component: NotFoundComponent}
];
