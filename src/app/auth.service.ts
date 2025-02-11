import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'userData';
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
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    const foundUser = users.find((user:any) => (user.username === username) && (user.password === password));

    return !!foundUser;
  }

  isAuthenticated(): boolean {
    // Use Double Exclamation Marks to convert to Boolean Value
    return !!localStorage.getItem(this.storageKey);
  }

  logout():void {
    localStorage.removeItem(this.storageKey);  
  }
}
