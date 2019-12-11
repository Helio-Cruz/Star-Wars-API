import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwapiService } from '../../shared/services/swapi.service';
import { HttpClient } from '@angular/common/http';
import { Swapis } from 'src/app/shared/models/swapi';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  data: Swapis;
  isLoading = true;
  next: string;
  previous: string;
  peoples = [];
  inscription: Subscription;
  page: number;
  id: number;
  limit: 10;
  disabled: boolean;
 

  constructor(private swapiService: SwapiService,
              private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.getSwapi();
    this.inscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = +queryParams.page || 1;
      }
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  getSwapi() {
    this.isLoading = true;
    this.swapiService
      .getSwapiPeople()
      .subscribe
      (datas => {
        this.data = datas;
        this.id = this.data.id;
        this.peoples = this.data.results;
        console.log(this.peoples);
        this.next = this.data.next;
        this.previous = this.data.previous;
        this.isLoading = false;
      });
  }

  getPeoplePreviousNext(change: boolean) {
    if (change === true) {
      this.isLoading = true;
      this.swapiService
        .getSwapiPage(this.next)
        .subscribe
        (datas => {
          this.data = datas;
          this.id = this.data.id;
          this.peoples = this.data.results;
          this.next = this.data.next;
          this.previous = this.data.previous;
          this.router.navigate(['/people'],
           {queryParams: { page: this.page + 1 }}
          );
          this.isLoading = false;
        });
      console.log(this.data);
    } else {
      this.isLoading = true;
      this.swapiService
        .getSwapiPage(this.previous)
        .subscribe
        (datas => {
          this.data = datas;
          this.id = this.data.id;
          this.peoples = this.data.results;
          this.next = this.data.next;
          this.previous = this.data.previous;
          this.router.navigate(['/people'],
          {queryParams: { page: this.page - 1 }}
         );
          this.isLoading = false;
        });
     }
  }
}
