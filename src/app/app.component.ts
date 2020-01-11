import { Component } from '@angular/core';
import { MessageService } from './shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'recipe-book';
  protected info: string = ''

  constructor(
    private messageService: MessageService
  ) {
    this.messageService.getInfoStream()
      .subscribe(( message ) => {
        this.info = message
        window.setInterval(() => {
          this.info = ''
        }, 5000)
      })
  }
}
