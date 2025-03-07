import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logo = 'assets/images/just-birds-logo.png';

  facebookLogo = 'assets/images/facebook.png';
  instagramLogo = 'assets/images/instagram.png';
  youtubeLogo = 'assets/images/youtube.png';


  socialsList = [
    {socialName: "Facebook", image: this.facebookLogo, link: "https://facebook.com"},
    {socialName: "Instagram", image: this.instagramLogo, link: "https://instagram.com"},
    {socialName: "Youtube", image: this.youtubeLogo, link: "https://youtube.com"},
  ]

  navigateList = [
    {navigateName: "About Us", link: "/about"},
    {navigateName: "Bird Catalog", link: "/bird-catalog"},
    {navigateName: "Our Team", link: "/about"},
    {navigateName: "Sign In", link: "/sign-in"},
  ]


  toPortfolio() {
    window.location.href = "https://github.com/mkbirb/mk-portfolio";
  }
}
