import {Injectable} from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.inti();
  }

  inti(): void {
    this.insert({
      name: "Firoze",
      email: "firoze@gmail.com",
      message: "Hello Firoze"
    });
    this.insert({
      name: "Ahmed",
      email: "ahmed@gmail.com",
      message: "Hello Ahmed"
    });
    this.insert({
      name: "Hossain",
      email: "hossain@gmail.com",
      message: "Hello Hosssain"
    });
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): any {
    this.messages.splice(index, 1);
  }
}
