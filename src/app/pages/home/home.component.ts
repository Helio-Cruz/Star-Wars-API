import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoHome =  '../../../assets/video/star wars.mp4';
  title = 'Welcome To Star Wars Api';
  text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat' +
         'nemo nisi ipsam at aperiam cum repellendus recusandae reiciendis cupiditate exquia' +
         'nobis autem beatae sit officia suscipit debitis temporibus iure.';
  constructor() { }

  ngOnInit() {
  }

}
