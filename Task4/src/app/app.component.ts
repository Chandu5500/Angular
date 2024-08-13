import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  url = ""
  src = ""
  changeURL(e:Event){
    const inp = e.target as HTMLInputElement
    this.url = inp.value
  }
  changeSRC(){
    this.src=this.url
  }
}
