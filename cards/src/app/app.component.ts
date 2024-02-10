import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items =[
    {
      title: "tree",
     source: "../../assets/tree.jpeg",
     subtitle: "nature",
     content: "Saw this awesome tree during my hike today."
    },
    {
      title: "mountain",
     source: "../../assets/mountain.jpeg",
     subtitle: "mountainhiking",
     content: "this is image of mountain."
    },
    {
      title: "biking",
     source: "../../assets/biking.jpeg",
     subtitle: "bikingm,an",
     content: "moutin biking is the besr"
    }
  ]
}
