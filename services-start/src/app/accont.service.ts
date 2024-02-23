import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";


@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logger: LoggingService) {}
    
      addAccount(name: string, status: string) {
        this.accounts.push({name , status});
      }
    
      uodateStatus (id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logger.LogStatusChange(status);
      }
    
}