import { SwapiMovie } from '../models/swapiMovie';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Swapis } from 'src/app/shared/models/swapi';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {


  constructor(private http: HttpClient) {}

  private readonly API = `${environment.API}`;

  getSwapiPeople(): Observable<Swapis> {
    return this.http.get<Swapis>(`${this.API}characters`)
      .pipe(
        catchError(this.handleError),
      );
  }
/*
  getSwapiPage(page?: string, id?: number): Observable<Swapis> {
    if (page == null) {
      return this.http.get<Swapis>(`${this.API}people/?page= `)
     .pipe(
      catchError(this.handleError),
      );
    } else if (page !== null)  {
      return this.http.get<Swapis>(page);
    }
  }
*/
  getSwapiMovie(): Observable<SwapiMovie[]> {
    return this.http.get<SwapiMovie[]>(`${this.API}films`)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('c\'est passé quelque chose, veuillez reessayer');
    } else {
      console.error(
        `Serveur a retourné le code ${error.status}, error: ${error.error}`
      );
    }
    return throwError(
      'Quelque chose c\'est passé'
    );
  }

}

