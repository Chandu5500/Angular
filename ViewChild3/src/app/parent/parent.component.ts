import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  Cdata:any
  @ViewChild(ChildComponent)
  child!:ChildComponent;
  ngAfterInit(){
   this.Cdata = this.child.cdata
   console.log(this.child,'parent')
  }


  // ngAfterViewInit(){
  //   this.child.search()
  //   this.CWord = this.child.getWord()
  // }
  
}
