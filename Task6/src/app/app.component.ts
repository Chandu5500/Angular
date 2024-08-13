import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  url = ""
  name = ""
  email = ""
  phone = ""
  surl = ""
  sname = ""
  semail = ""
  sphone = ""
  ishidden = true
  submit(){
    this.ishidden = false
    this.surl = this.url
    this.sname = this.name
    this.semail = this.email
    this.sphone = this.phone
  }
}
