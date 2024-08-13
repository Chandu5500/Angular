import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() counterChange = new EventEmitter();
  c = 0
  incr(){
    this.c++
    this.counterChange.emit(this.c)
  }
  decr(){
    this.c--
    this.counterChange.emit(this.c)
  }
  reset(){
    this.c = 0
    this.counterChange.emit(this.c)
  }
}
