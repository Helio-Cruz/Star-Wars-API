import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from 'src/app/error/error.component';

/* handling general errors */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error);
                    let errorMessage = 'An unknown error occurred, please try again!';
                    if (error.error.message) {
                        errorMessage = error.error.message;
                    }
                    this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
                   // alert(error.error.message); /* error.error.error. bizzare mais cest correct  (get the error)*/
                    return throwError(error);
                })
            );
    }
}
