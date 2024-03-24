import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userActivated= false;

  constructor(private subscribeService: SubscribeService) {}

  ngOnInit() {
     //custome observable
     this.subscribeService.activatedEmitter.subscribe((didActivated) => {
      console.log(`didActivated: ${didActivated}`);
      this.userActivated = didActivated;
    });
  }
}
