import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fs = "48px"
  isHide = false
  isRed = true
  redorblack = false
  change(){
    this.isHide = this.isHide ? false : true
    this.isRed = this.isRed ? false : true
  }
}
