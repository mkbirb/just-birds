import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  username: string | null = '';

  dashboardImage = 'assets/images/two-yellow-orange-birds-on-branch.jpg';

  constructor(private authservice: AuthService, private router: Router) {};

  ngOnInit(): void {
    this.authservice.currentUsername.subscribe(name => {this.username = name});
  }

  dashboardNavigateTo(link: string) {
    this.router.navigateByUrl(link);
  }

  dashboardNavigations = [
    {title: "Edit Details", link: '/edit-details'},
    {title: "View Cart", link: '/cart'},
  ]
}
