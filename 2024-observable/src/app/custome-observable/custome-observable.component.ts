import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-custome-observable',
  templateUrl: './custome-observable.component.html',
  styleUrls: ['./custome-observable.component.css']
})
export class CustomeObservableComponent implements OnInit, AfterViewInit {
  public counter: number;
  private observable: Observable<number>;

  constructor() {}

  ngOnInit(): void {
    //custome observable
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
    this.observable.subscribe(
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
