import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-custome-observable',
  templateUrl: './custome-observable.component.html',
  styleUrls: ['./custome-observable.component.css']
})
export class CustomeObservableComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public counter: number;
  private observable: Observable<number>;
  private subscription: Subscription; // Declare subscription here

  constructor() {}

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    console.log(`ON Destory called`);
    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 500); // Unsubscribe after 5 seconds
  }

  ngOnInit(): void {
   
    this.observable = Observable.create((observer) => {
      this.counter = 0;
      setInterval(() => {
        observer.next(this.counter);
        this.counter++;
        if (this.counter > 10) {
          observer.complete();
        }
        if (this.counter > 15) {
          observer.error('error');
        }
      }, 1000);
    });
  }

  ngAfterViewInit() {
    this.subscription = this.observable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
