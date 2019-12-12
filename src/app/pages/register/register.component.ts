import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  faArrowCircleLeft  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  faArrowCircleLeft = faArrowCircleLeft;

  private authStatusSub: Subscription;

  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authStatusSub = this.auth.getAuthStatusListener().subscribe(
      authStatus => {
        //   this.isLoading = false;
      }
    );
  }


  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.createUser(form.value.email, form.value.password);
  }
  onBackClick() {
    console.log('ça marche');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
