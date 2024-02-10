import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe} from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'pipes';
  name: string='';
  date:string='';
  amount : number=0;
  height: number=0;
  person={
    name:'alex',
    age:23,
    lastname:'Johns',
    PB:'LA'
  }
  miles: number=0;

  onNameChange(inputtext: Event){
    const target = inputtext.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(inputtext: Event){
    const target = inputtext.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(inputtext: Event){
    const target = inputtext.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }

  onHeightChange(inputtext: Event){
    const target = inputtext.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onKilometerChange(inputtext: Event){
    const target = inputtext.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
