import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('itemSelected') selectedItem = new EventEmitter<string>();

  onIemSelected(itemSelected:string){
    this.selectedItem.emit(itemSelected);
  }
}
