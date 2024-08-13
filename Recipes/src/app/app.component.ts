import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipes';
  Recipes:any
  constructor(){
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => this.Recipes = data.recipes)
      .catch((err) => console.log(err))

  }
}
