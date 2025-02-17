import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  imports: [FormsModule],
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent implements OnInit{
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  showPasswordIcon = 'assets/images/eye-open.png';
  hidePasswordIcon = 'assets/images/fafa-eye-slash.png';
  editIcon = 'assets/images/pencil.png';

  constructor(private authService: AuthService, private router: Router) {};


  ngOnInit(): void {
    this.initialValues();
  }

  toDashboard() {
    this.router.navigateByUrl("/dashboard");
  }

  showOrHidePassword() {
    this.showPassword = !this.showPassword;
  }

  private initialValues() {
    this.username = this.authService.getCurrentUsername(); 
    this.password = this.authService.getCurrentPassword();  
  }

  onSubmit() {
    if (this.authService.changeUsername(this.authService.getCurrentUsername(), this.username) == true) {
      if (this.authService.changePassword(this.username, this.password) == true) {
        alert("Details have been Updated");
      }
    }
  }

  reset() {
    // Resets to the Original Values previously saved
    this.initialValues();
  }

}
