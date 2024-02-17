import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('itemSelected') selectedItem = new EventEmitter<string>();


  onSelectRecipes(){
    this.selectedItem.emit('Recipes');
  }

  onSelectShoppinglist(){
    this.selectedItem.emit('ShoppingList');
  }
}
