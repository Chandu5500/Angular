import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //ONEWAY BINDING

  email = ""
  psw = ""
  oneWay(e:Event){
    const inp = e.target as HTMLInputElement
    if(inp.type == "email"){
      this.email = inp.value
    }else if(inp.type == "password"){
      this.psw = inp.value
    }
  }

  //TWOWAY BINDING
  Email = ""
  Password = ""
  submit(){
    alert("Email and Password were Submited" + this.Email + this.Password)
  }
}
