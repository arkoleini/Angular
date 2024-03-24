import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import{ SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,private subscribeService: SubscribeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    console.log(`button clicked`);
    this.subscribeService.activatedEmitter.emit(true);
  }
}
