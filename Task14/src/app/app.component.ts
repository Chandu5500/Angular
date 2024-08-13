import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisual = true
  month(){
    this.isVisual = this.isVisual ? false : true
  }
  year(){
    this.isVisual = this.isVisual ? false : true
  }
}
