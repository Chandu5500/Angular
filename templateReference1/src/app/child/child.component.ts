import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  data = ""
  DATA = ""
  get(){
    this.DATA = this.data
  }
  fun(){
    return "Chandu"
  }
}
