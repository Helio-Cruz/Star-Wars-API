import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  videoHome =  '../../../assets/video/star wars.mp4';
  imageHome =  '../../../assets/img/sky-stars';

  userIsAuthenticated = false;
  isLoading = true;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  onLogin(form: NgForm) {
     this.isLoading = true;
     if (form.invalid) {
      // console.log('you cant login');
      return;
      }
     this.auth.login(form.value.email, form.value.password);
     this.isLoading = false;
  }
  onRegisterClick() {
  //  console.log('register view');
    this.router.navigate(['/register']);
  }
}
