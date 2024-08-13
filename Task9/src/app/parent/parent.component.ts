import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent)
  x!:ChildComponent
  callName(){
    this.x.nameFun();
  }
  callText(){
    this.x.textFun();
  }
}
