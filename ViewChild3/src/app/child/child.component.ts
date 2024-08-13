import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  data = ""
  cdata = ""
  search(){
    this.cdata = this.data
    console.log(this.cdata)
  }
  // getWord(): string{
  //   console.log(this.word)
  //   return this.WORD
  // }
}
