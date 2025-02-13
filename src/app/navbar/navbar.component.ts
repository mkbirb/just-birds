import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService) {};

  logo = 'assets/images/just-birds-logo.png';

  isLoggedIn: boolean = false;

  links = [
    {title: "Home", link: "/", forLoggedIn: "both"},
    {title: "About", link: "/about",  forLoggedIn: "both"},
    {title: "Bird Catalog", link: "/bird-catalog",  forLoggedIn: "both"},
    {title: "Dashboard", link: "/dashboard", forLoggedIn: true},
    {title: "Sign In", link: "/sign-in",  forLoggedIn: false},
    {title: "Logout", link: "/", forLoggedIn: true}
  ]

  ngOnInit(): void {
    this.authservice.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    })
  }

  logout(): void {
    this.authservice.logout();
    alert("You have successfully Logged Out");
  }
}
