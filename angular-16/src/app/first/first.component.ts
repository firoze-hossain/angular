import {Component} from '@angular/core';

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

  onSubmit(): void {
    // console.log(this.isSubmitted = true);
    this.isSubmitted = true;
    this.messages.push({
      "name": this.name,
      "email": this.email,
      "message": this.message
    });
    console.log(this.messages);
  }
}
