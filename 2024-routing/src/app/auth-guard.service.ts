import { Injectable } from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";

import { Observable } from 'rxjs'
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private authService: AuthService, private router:Router){}
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |  Observable<boolean>| Promise<boolean> {
       
        ///Call service to ckeck is Authenticated
        return this.authService.isAuthenticated().then( (authenticated: boolean)=>{
            if(authenticated){
                console.log(`canActivate true and is Authenticated`);
                return true;     //if authenticated return true to Router
            }else {
                console.log(`canActivate false and is NOT-Authenticated`);
                this.router.navigate(['/']); 
                return false;   //if not authenticated redirect to root url
            }
        });
    }
}