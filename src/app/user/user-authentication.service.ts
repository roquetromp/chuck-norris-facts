import { Injectable } from '@angular/core';
import { UserCredentials } from "./user-credentials.interface";

interface User {
  username: string,
  isLoggedIn?: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  currentUser: User;
  constructor() { }

  authenticateUser(user: UserCredentials): boolean {

    if (!user) return false;
    //Easy login
    this.currentUser = {
      username: user.username,
      isLoggedIn: true
    }
    return true;
  }

  userIsLoggedIn(): boolean {
    return (!!this.currentUser && this.currentUser.isLoggedIn);
  }

  logoutUser(): void {
    this.currentUser = null;
  }
}
