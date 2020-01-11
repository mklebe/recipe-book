import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private infoStream: Subject<string>

  messages: String[] = []

  constructor() {
    this.infoStream = new Subject()
  }

  add(message: string): void {
    this.infoStream.next( message )
  }

  getInfoStream(): Subject<string> {
    return this.infoStream
  }

  clear(): void {
    this.messages = []
  }
}
