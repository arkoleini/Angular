import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('itemSelected') itslm = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('B Test2 Recipe', 'Recipe 2 item', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  itemSelected(itemName: string){
    const founditem =(this.recipes.find(x=> x.name==itemName));
    console.log(`###Recipe list###-item selected name ${itemName}, show value: ${founditem}`);
    this.itslm.emit(founditem);
  }

}
