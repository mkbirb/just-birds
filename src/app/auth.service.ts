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
    if (users.some((u:any) => u.username == user.username)) {
      return false;
    }
    else {
      users.push(user);

      localStorage.setItem(this.storageKey, JSON.stringify(users));
  
      return true;
    }
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
