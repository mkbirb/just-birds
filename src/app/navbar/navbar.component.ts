import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo = 'assets/images/just-birds-logo.png'

  links = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Bird Catalog", link: "/bird-catalog"},
    {title: "Sign In", link: "/sign-in"}
  ]
}
