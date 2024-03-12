import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { ServersService } from "../servers.service";
import { Inject, Injectable } from "@angular/core";

interface Server{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class serverResolver implements Resolve<Server>{
    constructor(private serverService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>| Promise<Server> | Server {
        //call ServersService prior server.component.ts render
        return this.serverService.getServer(+route.params['id']);
    }
}