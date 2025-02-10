import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  logo = 'assets/images/just-birds-logo.png';

  signInImage = 'assets/images/red-parrot-birds.jpg';
  signUpImage = 'assets/images/green-parrot-along-branches.jpg'

  signIn = true;

  switchEnterMethod() {
    this.signIn = !this.signIn;
  }
}
