import { EventEmitter,  Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public activatedEmitter = new EventEmitter<boolean>();
  private isSliding = new BehaviorSubject<boolean>(false);
  public isSliding$ = this.isSliding.asObservable(); // Declare isSliding$ as public

  constructor() {} // Constructor is missing in your code

  toggleSlide() {
    this.isSliding.next(!this.isSliding.getValue());
    console.log(`isSliding value: ${this.isSliding}`);
}

}