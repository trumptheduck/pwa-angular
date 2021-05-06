import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.css']
})
export class TabsBarComponent implements OnInit {
  cssClasses: string[] = ["","","",""];
  constructor() { }

  ngOnInit(): void {
    this.selectTab(0);
  }
  selectTab(index:number):void {
    for (let i = 0; i<this.cssClasses.length;i++) {
      this.cssClasses[i] = "";
    }
    this.cssClasses[index] = "selected";
  }

}
