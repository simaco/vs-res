import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'New', icon: 'fa-plus'},
      {label: 'Open', icon: 'fa-download'},
      {label: 'Undo', icon: 'fa-refresh'}
    ];
  }

}
