import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
@Input('selectedRe') inprec: Recipe;
recipeDetailSelected: Recipe;
constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inprec !== null && this.inprec !== undefined) {
      console.log(`****Detail*****there is recipe  selected Name:${this.inprec.name}`)
      this.recipeDetailSelected = this.inprec
    }
  }

}
