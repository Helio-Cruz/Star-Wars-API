import { AuthenticationService } from './../services/authentication.service';
import { SwapiService } from '../../shared/services/swapi.service';
import { SwapiMovie } from './../models/swapiMovie';
 
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
 



@Injectable()
// export class AuthGuard implements CanActivate, CanLoad {
    export class AuthGuard  implements HttpInterceptor  {


            constructor(
     //   private authService: AuthService,
        private router: Router,
        private auth: AuthenticationService,
        private swapi: SwapiService
    ) {}

        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const authToken = this.auth.getToken();
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
            return next.handle(authRequest);
        }



    /*

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {
        if (!this.auth.isLoggedIn()) {
            return false;
        }
        this.router.navigate(['/login']);

        return true;
    }
    private verifyAccess() {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canLoad: verificando se o usuario pode carregar o codigo');

        return this.verifyAccess();
    }
*/
    /*
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {
        if (this.authService.userIsAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);

        return false;
    }
    private verifyAccess() {
        if (this.authService.userIsAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canLoad: verificando se o usuario pode carregar o codigo');

        return this.verifyAccess();
    }
    */
}
