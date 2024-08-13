import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pvalue = ""
  PVALUE = ""
  psend(){
    
    this.PVALUE = this.pvalue
  }
}
