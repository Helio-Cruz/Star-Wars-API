import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthenticationService, private router: Router) { }

private authListenerSubs: Subscription;
userIsAuthenticated = false;

  ngOnInit() {
    this.userIsAuthenticated = this.auth.getIsAuth();
    this.authListenerSubs = this.auth
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated;
  });
  }
  onLogout() {
    this.auth.logout();
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
 
}
