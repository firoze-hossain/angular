import {Component, inject} from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];
  //property injection
  // firstService: MyFirstService = inject(MyFirstService);

  constructor(
     private firstService: MyFirstService
  ) {
    this.messages = this.firstService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  // onSubmit(): void {
  //   // console.log(this.isSubmitted = true);
  //   this.isSubmitted = true;
  //   this.messages.push({
  //     "name": this.name,
  //     "email": this.email,
  //     "message": this.message
  //   });
  //   console.log(this.messages);
  // }

  //using service
  onSubmit(): void {
    // console.log(this.isSubmitted = true);
    this.isSubmitted = true;
    this.firstService.insert({
      "name": this.name,
      "email": this.email,
      "message": this.message
    });
    console.log(this.messages);
  }

  // deleteMessage(index: number): void {
  //   this.messages.splice(index, 1)
  // }
//using service
  deleteMessage(index: number): void {
    this.firstService.deleteMessage(index)
  }
}
