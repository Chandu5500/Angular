import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  c = 0
  constructor(private hc: HttpClient) { }
  incr(){
    this.c++
  }
  getData(){
    return this.hc.get('https://dummyjson.com/recipes')
  }
}
