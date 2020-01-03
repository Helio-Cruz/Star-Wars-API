import { AuthenticationService } from './shared/services/authentication.service';
 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {

  back = '../../../assets/img/back.jpg';

  constructor(private auth: AuthenticationService, private router: Router) {  

   }

 ngOnInit() {
  this.auth.autoAuthUser();
 }
 ngOnDestroy() {

 }
 onLogout() {
   this.auth.logout();
   this.router.navigate(['/login']);
 }
}
