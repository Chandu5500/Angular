import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Chandu"
  rollno = 477
  marks = 880
  rank = 88
  url = "https://media.zigcdn.com/media/model/2024/Apr/ktm-390-adventure-right-side-view_600x400.jpg"
  isDisabled = false
  fun(){
    alert("Helloooo")
  }
}
