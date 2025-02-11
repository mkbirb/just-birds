import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  logo = 'assets/images/just-birds-logo.png';

  signInImage = 'assets/images/red-parrot-birds.jpg';
  signUpImage = 'assets/images/green-parrot-along-branches.jpg'

  user = {username: '', password: '', confirmPassword: ''};

  signInMethod = true;

  canEnter = false;

  signUpSuccessful = false;

  constructor(private authService: AuthService, private router: Router) {}

  switchEnterMethod() {
    this.signInMethod = !this.signInMethod;

    // Reset the Fields when switching between the Enter Methods
    this.user.username = '';
    this.user.password = '';
    this.user.confirmPassword = '';
  }

  signIn() {
    this.canEnter = this.authService.signIn(this.user.username, this.user.password);
    if (this.emptyEnterCheck()) {
      if (this.canEnter == true) {
        alert('Sign In Successful');
        
        this.authService.setUsername(this.user.username);
        this.router.navigate(['/dashboard'])
      }
      else {
        alert('Invalid Credentials');
      }
    }
  }

  onSubmit() {
    if (this.signInMethod == true) {
      this.signIn();
    }
    else if (this.signInMethod == false) {
      this.signUp();
    }
  }

  signUp() {

    // Check if the Password Input is the same as Confirm Password input
    if (this.emptyEnterCheck()) {
      if (this.user.confirmPassword == this.user.password) {
        this.signUpSuccessful = this.authService.signUp(this.user);
        if (this.signUpSuccessful) {
          alert('Sign Up Successful');
          this.signInMethod = true;
          this.user.username = '';
          this.user.password = '';
        }
      }
      else {
        alert('Password given does NOT Match');
      }
    }
  }

  emptyEnterCheck(): boolean {
    
    if (this.user.username == '') {
      alert("Please Enter your Username");
      return false;
    }
    else if (this.user.password == '') {
      alert("Please Enter your Password");
      return false;
    }

    if (this.signInMethod == false) {
      if (this.user.confirmPassword == '') {
        alert("Please Confirm your Password");
        return false;
      }
    }

    return true;
  }
}
