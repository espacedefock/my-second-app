import { Component, OnInit } from '@angular/core';

// the decorator that specifies the Angular metadata for the component.
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'Offline';

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
