import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  userName = 'George';
  userNameStatus = 'User name saved...'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); // almose like: function () {}

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created! Server name is: ' + this.serverName;
    console.log()
  }
  
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername() {
    console.log('OnUpdateUsername ran...')
    this.userName = ''
    this.userNameStatus = 'Username reset!'
  }
}
