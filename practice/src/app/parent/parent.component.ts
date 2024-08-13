import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  myURL = ""
  url = ""
  search(){
    this.url = this.myURL
  }
}
