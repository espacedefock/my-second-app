import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'HelloServer';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'A server is created';
  }

  onUpdateServerName(event: Event){
    console.log(event);

    // typescript doesn't like it:
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
