import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  c = 0
  @Output() counterChange = new EventEmitter();
  incr(){
    this.c++
    this.counterChange.emit(this.c)
  }
}
