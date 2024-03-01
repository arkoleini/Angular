import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.user = { id : this.router.snapshot.params['id'],
                  name: this.router.snapshot.params['name'] }

    this.router.params.subscribe( param=> {
      console.log(`this is user: ${JSON.stringify(param)}`)
      this.user.id = param.id;
      this.user.name= param.name;
    })
  };

}
