import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


 

  constructor( public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.createUser(form.value.email, form.value.password);
  }
}
