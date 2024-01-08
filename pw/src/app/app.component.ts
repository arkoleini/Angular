import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  validcharacters='';
  password = '';
  parsedValue= 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeUseLetters(){
    this.includeLetters =!this.includeLetters;
    console.log(`letterChanged: ${this.includeLetters}`);
  }
  onChangeUseNumbers(){
    this.includeNumbers =!this.includeNumbers;
    console.log(`includeNumbers: ${this.includeNumbers}`);
  }

  onChangeUseSymbols(){
    this.includeSymbols =!this.includeSymbols;
    console.log(`includeSymbols: ${this.includeSymbols}`);
  }

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    this.parsedValue = parseInt(target.value);
    
    if (!isNaN(this.parsedValue)) {
      this.length = this.parsedValue;
   }
    
    console.log(`this is length value: ${this.length}`)
  }

  
  onButtonClick(){
    const alphabets="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+=-";

    if (this.includeLetters){
      this.validcharacters+=alphabets;
    }
    if (this.includeNumbers){
      this.validcharacters+=numbers;
    }
    if (this.includeSymbols){
      this.validcharacters+=symbols;
    }

    this.password='';
    for (var i=0; i<this.length; i++){
     const oneChar = this.validcharacters[Math.floor(Math.random()*this.validcharacters.length)];
     console.log(`oneChar, i: ${oneChar}, ${i}`);
     this.password+=oneChar;
    }
  }
  
}
