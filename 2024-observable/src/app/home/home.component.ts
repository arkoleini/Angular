import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, observable } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription

  constructor() { }

  ngOnInit() {
      //create a custome observable 
        const customerIntervalObservable = Observable.create((observer) => {
          let i = 0;
          setInterval(() => {
            observer.next(i);
            i++;
            if (i>5){
              observer.complete();
            }
          }, 1000);
        });

      //subscribe to custome observable  
  this.firstObsSubscription = customerIntervalObservable.subscribe(data => {
    console.log(data);
  });
}

ngOnDestroy(): void {
  this.firstObsSubscription.unsubscribe();
}

}
