import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  videoHome =  '../../../assets/video/star wars.mp4';
  imageHome =  '../../../assets/img/star.jpg';

  user: User = new User();

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.onLogin(this.user);
    console.log(this.user);
  }

}
