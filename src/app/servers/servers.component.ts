import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  //you can have templateUrl or template but can not be missing.
  // templateUrl: './servers.component.html',
  // if using internal webpage use templateUrl otherwise use back ticks for an inline template
  //template: `<app-server></app-server><app-server></app-server>`,
  // by adding brackets to the selector it becomes an attribute. Placing a period in front of sector makes it a class.

  // template: '' +
  //   '<app-server></app-server>' +
  //   '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ="No Server was Created!";
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true }, 2000);

  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was Created!';
  }
  onUpdateServerName (event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
