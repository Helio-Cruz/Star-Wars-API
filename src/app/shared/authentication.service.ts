import { User } from './models/user';
// import { TokenResponse, TokenPayload } from './models/userDetails';
import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor( private http: HttpClient, private router: Router  ) { }

  createUser(email: string, password: string) {
     const user: User = { email, password };
     this.http.post('http://localhost:3000/api/user/register', user)
      .subscribe(response => {
        console.log(response);
      });
  }
  login(email: string, password: string) {
    const user: User = { email, password };
    this.http.post('http://localhost:3000/api/user/login', user)
    .subscribe(response => {
      console.log(response);
    });
  }
}
