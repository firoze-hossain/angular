import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
name:string='';
email:string='';
message:string='';

  onSubmit() :void{
    console.log(this.name);
  }
}
