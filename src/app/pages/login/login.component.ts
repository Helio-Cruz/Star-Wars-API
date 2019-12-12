import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  videoHome = '../../../assets/video/star wars.mp4';
  imageHome = '../../../assets/img/sky-stars';

  userIsAuthenticated = false;
  isLoading: boolean;

  private authStatusSub: Subscription;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authStatusSub = this.auth.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }


  onLogin(form: NgForm) {
    if (form.invalid) {
      // console.log('you cant login');
      return;
    }
    this.auth.login(form.value.email, form.value.password);
    this.isLoading = true;
  }
  onRegisterClick() {
    //  console.log('register view');
    this.router.navigate(['/register']);
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
