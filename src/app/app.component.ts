import { AuthenticationService } from './shared/authentication.service';
import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  // wrapperImg = '../../../assets/img/wrapper.jpg';
  back = '../../../assets/img/back.jpg';

 // title = 'star-wars-API';



  // showMenu: boolean = false;

  constructor(private authService: AuthService, private auth: AuthenticationService) {

   }
/*
   ngOnInit() {
     this.authService.showMenuEmitter
     .subscribe(
       show => this.showMenu = show
     );
   }
  */
 ngOnInit() {

 }

}
