import { EventEmitter,  Injectable, OnInit } from "@angular/core";


@Injectable()
export class SubscribeService {
  public activatedEmitter = new EventEmitter<boolean>();
  }
