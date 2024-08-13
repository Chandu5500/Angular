import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students = ["Raja", "Chandu", "Vinay", "Abhishek"]
  Movies = [
    {
      Name: "RRR",
      Year: 2023
    },
    {
      Name: "Kalki",
      Year: 2024
    },
    {
      Name: "Adhipurush",
      Year: 2024
    }
  ]
}
