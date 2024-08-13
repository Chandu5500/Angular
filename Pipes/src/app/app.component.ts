import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number= 35
  name= "CHANDU"
  dt= new Date()
  price= 100;
  tax= 24.9998
  title= "Kalki"
  obj={
    name: "Raj",
    age: 25
  }
  result: any
  constructor(private hc: HttpClient)
  {
     this.result = this.hc.get('https://fakestoreapi.com/products');
  }
}
