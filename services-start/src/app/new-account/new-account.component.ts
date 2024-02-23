import { Component,  } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accont.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  
  constructor(private loggingService: LoggingService,
             private accountService: AccountService ) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus)
    //console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.LogStatusChange(`name: ${accountName} and Status: ${accountStatus}`);  //using service
  }
}
