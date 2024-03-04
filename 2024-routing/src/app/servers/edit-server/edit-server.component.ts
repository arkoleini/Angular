import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  param1 = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(`queryParamter: ${JSON.stringify(this.route.queryParamMap)}`);   //only shows at load compoent
    console.log(`queryParamter: ${JSON.stringify(this.route.fragment)}`);       //only shows at load compoent

    //--to subscribe query params after load also pulls value
    this.route.queryParams
        .subscribe(
          (queryParams: Params)=>{
          this.allowEdit = queryParams['allowEdit'] === '1' ? true: false;
    }) 

      this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});

  }

}
