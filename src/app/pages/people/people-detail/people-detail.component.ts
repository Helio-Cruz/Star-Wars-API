import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/shared/swapi.service';
import { Swapis } from 'src/app/shared/models/swapi';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  isLoading = true;
  data: Swapis;
  peoples = [];
  next: string;
  previous: string;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
   // this.getSwapi();
  }

/*
  getSwapi() {
    this.isLoading = true;
    this.swapiService
      .getSwapiPeople()
      .subscribe
      (datas => {
        this.data = datas;
        this.peoples = this.data.results;
        console.log(this.peoples);
        this.next = this.data.next;
        this.previous = this.data.previous;
        this.isLoading = false;
      });
  }
  */

  /*
  getPeoplePreviousNext(change: boolean) {
    if (change === true) {
      this.isLoading = true;
      this.swapiService
        .getSwapiId(this.next)
        .subscribe
        (datas => {
          this.data = datas;
          this.peoples = this.data.results;
          this.next = this.data.next;
          this.previous = this.data.previous;
          this.router.navigate(['people'],
          {queryParams: {'page': ++ this.page }}
          );
          this.isLoading = false;
        });
      console.log(this.data);
    } else {
      this.isLoading = true;
      this.swapiService
        .getSwapiId(this.previous)
        .subscribe
        (datas => {
          this.data = datas;
          this.peoples = this.data.results;
          this.next = this.data.next;
          this.previous = this.data.previous;
          this.isLoading = false;
        });
     }
  }
*/
}
