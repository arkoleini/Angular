import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature="Recipes";

  onNavigate(selectedItem: string){
    console.log(`Selected item:${selectedItem}`);
    this.loadedFeature = selectedItem;
  }
}
