import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(private hc:HttpClient) { }
  getData(){
    return this.hc.get('https://randomuser.me/api')
  }
}
