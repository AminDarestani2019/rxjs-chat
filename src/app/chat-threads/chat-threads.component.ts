import { Component,  OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from './../thread/threads.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html'
})
export class ChatThreadsComponent {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }
}
