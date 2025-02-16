import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BirdCatalogComponent } from './bird-catalog/bird-catalog.component';
import { BirdDetailsComponent } from './bird-details/bird-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bird-catalog', component: BirdCatalogComponent},
  { path: 'bird/:id', component: BirdDetailsComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'cart', component: CartComponent},
  { path: 'edit-details', component: EditDetailsComponent},
  { path: '**', component: NotFoundComponent}
];
