import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded  = new EventEmitter<Ingredient>();
  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemNumber') itemNumber: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    console.log(`///***Item number: ${this.itemNumber.nativeElement.value} and item name: ${this.itemName.nativeElement.value}`);
    const ingName = this.itemName.nativeElement.value;
    const ingNumber = this.itemNumber.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingNumber);
    this.ingredientAdded.emit(newIngredient);
  }
}
