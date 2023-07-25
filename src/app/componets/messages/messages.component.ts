import { Component } from '@angular/core';
import { MessageService } from 'src/app/serivices/message.service';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('menssageBar', [
      transition('void => *', [
        style({
          transform: 'translateY(100%)'
        }),
        animate(250, style({
          transform: 'translateY(0)'
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateY()'
        }),
        animate(250, style({
          transform: 'translateY(100%)'
        }))
      ])
    ]),
    trigger('enterMessage' , [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }),
        animate(200, style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ])
    ])
  ]
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
