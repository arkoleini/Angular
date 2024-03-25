import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubscribeService } from '../subscribe.service'; // Correct import


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  isSliding = false; // Track the sliding state


  constructor(private route: ActivatedRoute,private subscribeService: SubscribeService) { }
  

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

    this.subscribeService.isSliding$.subscribe((isSliding) => {
      this.isSliding = isSliding; // Update local state based on observable
    });
  }

  onActivate() {
    console.log(`button clicked`);
    this.subscribeService.activatedEmitter.emit(true);
  }

  onButtonClick() {
    this.subscribeService.toggleSlide();
    console.log(`toggle button clicked`);
  }

  
}
