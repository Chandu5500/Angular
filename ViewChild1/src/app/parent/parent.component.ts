import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  c = ""
  @ViewChild(ChildComponent)
  child!:ChildComponent
  VALUE = ""
  
  ngAfterViewInit(){
    this.child.SendToParent()
    this.VALUE = this.child.val
  }
}
