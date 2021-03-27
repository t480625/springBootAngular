import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageService} from '../servers/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   message: string;
  constructor(private messageServer: MessageService) { }

  ngOnInit(): void {
    // this.messageServer.getMessage().subscribe(data => {
    //   console.log('messageServer');
    //   console.log(data);
    //   this.message = data.;
    // });
    this.getMessage();
  }

  getMessage(): any {
    console.log('messageServer');
    this.messageServer.getMessage().subscribe(
      data => { this.message = data; });
    }
}
