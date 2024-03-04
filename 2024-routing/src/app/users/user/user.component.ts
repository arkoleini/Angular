import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;            //define a property type of subscription

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.user = { id : this.router.snapshot.params['id'],
                  name: this.router.snapshot.params['name'] }

    this.paramSubscription = this.router.params.subscribe( param=> {    //Assign value to subscription
      console.log(`this is user: ${JSON.stringify(param)}`)
      this.user.id = param.id;
      this.user.name= param.name;
    })
  };

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe()   //need to manually unsubscribe
  }


}
