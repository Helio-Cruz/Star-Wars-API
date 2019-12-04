import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

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
}
