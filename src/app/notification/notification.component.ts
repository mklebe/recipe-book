import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.styl']
})
export class NotificationComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
