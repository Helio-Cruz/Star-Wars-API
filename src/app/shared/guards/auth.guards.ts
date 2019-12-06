import { AuthenticationService } from './../authentication.service';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
// export class AuthGuard implements CanActivate, CanLoad {
    export class AuthGuard implements CanActivate {
    constructor(
     //   private authService: AuthService,
        private router: Router,
        private auth: AuthenticationService
    ) {}

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }

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
