import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0
  AisDisable = false
  SisDisable = false
  add(){
    if(this.count==20){
      this.AisDisable = true
    }else{
      this.count++
      this.SisDisable = false
    }
  }
  sub(){
    if(this.count==0){
      this.SisDisable = true
    }else{
      this.count--
      this.AisDisable = false
    }
  }
  reset(){
    this.count=0
    this.AisDisable = false
    this.SisDisable = false
  }
}
