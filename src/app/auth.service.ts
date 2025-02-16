import { Injectable } from '@angular/core';
import { parse } from 'path';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'userData';

  // Allows the sharing of the Username that is currently logged in
  private usernameSource = new BehaviorSubject<string | null>(null);
  currentUsername = this.usernameSource.asObservable();

  private isLoggedInSource = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSource.asObservable();

  constructor() { }

  signUp(user: {username: string; password: string}): boolean {
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    // Prevents SignUp if the Username already in Users List
    if (this.isPasswordValid(user.password) == false) {
      return false;
    }
    
    if (users.some((u:any) => u.username == user.username)) {
      alert('Username already exists, please choose a different Username');
      return false;
    }
    else {
      users.push(user);

      localStorage.setItem(this.storageKey, JSON.stringify(users));
  
      return true;
    }
  }

  private isPasswordValid(password: string): boolean {
    if (password.length < 8) {
      alert('Password must be at least 8 Characters long');
      return false;
    }
    else if (!/[A-Z]/.test(password)) {
      alert('Password must contain at least one uppercase letter.');
      return false;
    }
    else if (!/\d/.test(password)) {
      alert('Password must contain at least one number.');
      return false;
    }
    else if (!/[\W_]/.test(password)) {
      alert('Password must contain at least one special character');
      return false;
    }  
    return true;
  }

  signIn(username: string, password: string): boolean {
    let signInValid = false;

    const foundUser = this.findUser(username);

    if (!!foundUser) {
      if (foundUser.password == password) {
        signInValid = true;
        this.isLoggedInSource.next(true);
      }
    }

    return signInValid;
  }

  isAuthenticated(): boolean {
    // Use Double Exclamation Marks to convert to Boolean Value
    return !!localStorage.getItem(this.storageKey);
  }

  setUsername(username: string) {
    this.usernameSource.next(username);
  }

  getCurrentUsername(): string {
    return this.usernameSource.getValue() ?? "";
  }

  getCurrentPassword(): string {
    const currentUser = this.findUser(this.getCurrentUsername());

    if (currentUser) {
      return currentUser.password;
    }
    else {
      alert("Current Password cannot be found");
      return '';
    }
  }


  findUserIndex(username: string) {
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    const userIndex = users.findIndex((u: any) => u.username === username);

    return {userIndex, users};
  }

  changeUsername(oldUsername: string, newUsername: string): boolean {
    const {userIndex, users} = this.findUserIndex(oldUsername);

    if (userIndex !== -1) {
      // If found Username
      users[userIndex].username = newUsername;

      localStorage.setItem(this.storageKey, JSON.stringify(users));

      // Set Current User to the new Username
      this.setUsername(newUsername);
  
      return true;
    }
    else {
      alert("Error: Username cannot be found: " + oldUsername); 

      return true;
      
    }
    
  }

  changePassword(username: string, newPassword: string): boolean {
    if (this.isPasswordValid(newPassword) == false) {
        return false;
    }

    // Find the Specific User
    const {userIndex, users} = this.findUserIndex(username);


    users[userIndex].password = newPassword;
  
  
    localStorage.setItem(this.storageKey, JSON.stringify(users));

    return true;
    
  }

  findUser(username: string): any {
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    const foundUser = users.find((user:any) => (user.username === username));

    return foundUser;
  }

  logout():void {
    this.isLoggedInSource.next(false);
    
    // Reset the Current Username
    this.usernameSource.next(null);
  }
}
