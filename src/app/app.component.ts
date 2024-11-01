import { Component, Inject } from '@angular/core';

import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-chat';
  constructor(public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService) {
      ChatExampleData.init(messagesService, threadsService, usersService);
    }
}
