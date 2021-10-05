import { Component, OnInit } from '@angular/core';

// the decorator that specifies the Angular metadata for the component.
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offLine';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    console.log('get color', this.serverStatus);
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
