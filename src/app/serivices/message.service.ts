import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  messages: string[] = [];

  /**
   * Add a message to the list of messages
   * @param message Message to be added
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * Clear the list of messages
   */
  clear() {
    this.messages = [];
  }
}
