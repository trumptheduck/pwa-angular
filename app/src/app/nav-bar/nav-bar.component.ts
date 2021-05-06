import { Component, OnInit } from '@angular/core';
import { Events } from '../event-handlers.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private Events:Events) { }

  ngOnInit(): void {

  }
  toggleSidenavVisibility(visible:boolean):void {
    this.Events.toggleSidenavVisibility(visible)
  }

}
