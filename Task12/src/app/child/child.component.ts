import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() counterChange = new EventEmitter();
  h! : any
  s! : any
  hide(){
    this.h = true
    this.counterChange.emit(this.h)
  }
  show(){
    this.s = false
    this.counterChange.emit(this.s)
  }
}
