import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  c = 0
  add(){
    this.c++
  }
  sub(){
    this.c--
  }
  reset(){
    this.c=0
  }
}
