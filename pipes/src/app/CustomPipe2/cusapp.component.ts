// app.component.ts
import { Component } from '@angular/core';
import { ShortenPipe } from './shorten.pipe';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="text" [(ngModel)]="inputText">
      <button (click)="addText()">Add</button>
    </div>
    <div>
      <textarea rows="5" cols="50">{{ inputText | shorten }}</textarea>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class CustappComponent {
  inputText: string = '';

  addText() {
    // Logic to add new text
    // For demonstration purpose, I'm just appending to inputText
    this.inputText += '\nNew Text';
  }
}
