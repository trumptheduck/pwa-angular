import { Component, OnInit } from '@angular/core';
import { Events } from '../event-handlers.service'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private Events:Events) { }

  isVisible: boolean = false;
  cssClass: string = "";
  toggleVisibility(visible:boolean):void {
    this.isVisible = visible;
    if (this.isVisible) {
      this.cssClass = "active";
    } else {
      this.cssClass = ""
    }
  }
  ngOnInit(): void {
    this.Events.toggleSidenavEvent.subscribe(visible => {
      this.toggleVisibility(visible)
    })
  }
}
