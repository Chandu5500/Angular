import { Component } from '@angular/core';
import { PersonDataService } from './person-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Persons:any=[]
  constructor(private pd: PersonDataService){
    this.pd.getData().subscribe((res)=>(this.Persons=res))
  }
}
