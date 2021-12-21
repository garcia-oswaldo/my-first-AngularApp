import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //you can have templateUrl or template but can not be missing.
  // templateUrl: './servers.component.html',
  // if using internal webpage use templateUrl otherwise use back ticks for an inline template
  //template: `<app-server></app-server><app-server></app-server>`,

  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
