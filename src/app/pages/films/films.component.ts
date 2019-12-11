import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/shared/services/swapi.service';
import { SwapiMovie } from 'src/app/shared/models/swapiMovie';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  movies: SwapiMovie[];
  film: '../../../assets/img/vehicles2.jpg';

  isLoading = true;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getSwapiMovie();
  }

  getSwapiMovie() {
    this.isLoading = true;
    this.swapiService
    .getSwapiMovie()
    .subscribe(
      (data: SwapiMovie[]) =>  {
      this.movies = data;
      this.isLoading = false;
      });
  }

}
