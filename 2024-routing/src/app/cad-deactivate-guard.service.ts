import { Observable } from 'rxjs/observable';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";


export interface CanComponentDeactivate {
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
} 

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
   
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): 
          boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
}