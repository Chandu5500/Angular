import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipes1';
  count: number
  Recipes:any=[]
  constructor(private rd: RecipeDataService){
    this.count = this.rd.c
    this.rd.getData().subscribe((res)=>(this.Recipes=res))
  }
}
