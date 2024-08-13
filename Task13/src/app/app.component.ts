import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isHide = false
  isFont = false
  display(){
    this.isHide = this.isHide ? false : true
  }
  font(){
    this.isFont = this.isFont ? false : true
  }
}
