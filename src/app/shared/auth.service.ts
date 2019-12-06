import { User } from './models/user';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated = false;

  showMenuEmitter = new EventEmitter<boolean>();

 constructor(private router: Router) { }

 /*

  onLogin(user: User) {
    if (user.name === 'user@email.com' && user.password === '102030') {
      this.userAuthenticated = true;
      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);


    } else {
      this.userAuthenticated = false;
      this.showMenuEmitter.emit(false);
    }
  }
  userIsAuthenticated() {
    return this.userAuthenticated;
  }
  */
}
