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
isSubmitted:boolean= false;

  onSubmit() :void{
    console.log(this.isSubmitted=true);
    console.log(this.name)
  }
}
