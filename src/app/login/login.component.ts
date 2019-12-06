import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { TokenPayload } from '../shared/models/userDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  videoHome =  '../../../assets/video/star wars.mp4';
  imageHome =  '../../../assets/img/star.jpg';

  user: User = new User();

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService,private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  /*
  onLogin() {
    this.authService.onLogin(this.user);
    console.log(this.user);
  }
  */

  login() {
    this.auth.login(this.credentials)
    .subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.log(err);
    });
  }

}
