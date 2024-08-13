import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  c = 0;
  incr(){
    this.c++
  }
  decr(){
    this.c--
  }
  reset(){
    this.c=0
  }
}
