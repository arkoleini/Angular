import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../accont.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent implements OnInit {
  //@Input() account: {name: string, status: string};
  @Input() id: number;
  account: {name: string, status: string};
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

constructor(private accountService: AccountService) {}

ngOnInit(): void {
    this.account = this.accountService.accounts[this.id];
}
  onSetTo(status: string) {
    this.accountService.uodateStatus(this.id, status);
    console.log('A server status changed, new status: ' + status);
  }
}
