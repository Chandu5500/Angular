import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  nameFun(){
    console.log("Chandu")
  }
  textFun(){
    console.log("Geen Tapak Tum Tum")
  }
}
