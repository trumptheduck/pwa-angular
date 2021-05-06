import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Events {
  private toggleSidenavEventSubject = new Subject<boolean>();
  public toggleSidenavEvent = this.toggleSidenavEventSubject.asObservable();
  constructor() { }
  toggleSidenavVisibility(visible:boolean):void {
    this.toggleSidenavEventSubject.next(visible);
    console.log("Log")
  }
}
