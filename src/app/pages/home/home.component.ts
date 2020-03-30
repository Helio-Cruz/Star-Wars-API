import { Component, OnInit } from '@angular/core';
import { gsap, TimelineLite, TweenMax } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoHome =  '../../../assets/video/star wars.mp4';
  title = 'Welcome To Star Wars Api';
  text = 'Here you will find some data of Characters and Films from Star Wars' ;


  constructor() { }

  ngOnInit() {
    gsap.timeline()
    .from('#reveal1', {
      opacity: 0, scale: 0, ease: 'none'
    });
  }

}
