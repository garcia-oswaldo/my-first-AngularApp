import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
 serverId: number =10;
 serverStatus: string ='offline';

 // how you define a method in typescript
 getServerStatus(){
   return this.serverStatus;

 }
}
