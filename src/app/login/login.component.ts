import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { AuthService } from '../shared/auth.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  videoHome =  '../../../assets/video/star wars.mp4';
  imageHome =  '../../../assets/img/star.jpg';
 

  constructor( private authService: AuthService, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  onLogin(form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.auth.login(form.value.email, form.value.password);
  }

}
