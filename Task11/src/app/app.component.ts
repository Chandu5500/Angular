import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = 0
  onCounterChange(val: number)
  {
    this.counter = val
  }
}
