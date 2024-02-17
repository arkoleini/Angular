import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('sc') serverCreated=new EventEmitter<{type: string, name: string, content:string}>;
  @Output('bpc') blueprintCreated=new EventEmitter<{type: string, name: string, content:string}>;
  @ViewChild('domReference1') serverContent;

  onAddServer(localRef1: HTMLInputElement){
    this.serverCreated.emit({type:'Server', name: localRef1.value, content: this.serverContent})
  }

  onAddBlueprint(localRef1: HTMLInputElement){
    this.blueprintCreated.emit({type:'Server', name: localRef1.value,content: this.serverContent})
  }
}
