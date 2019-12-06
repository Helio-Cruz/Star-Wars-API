import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { TokenPayload } from '../shared/models/userDetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '' 
  };


  constructor( private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

}
