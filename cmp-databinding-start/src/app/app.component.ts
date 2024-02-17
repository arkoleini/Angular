import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'ServerA',content:'Test server'},
  {type:'blueprint',name:'ServerB',content:'Test server22' }];


  onServerAdded(serverData:{type: string, name: string, content:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData:{type: string, name: string, content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

  confirmAction() {
    console.log('Action confirmed!');
    // Additional logic for confirm action
  }

  cancelAction() {
    console.log('Action canceled!');
    // Additional logic for cancel action
  }
}
