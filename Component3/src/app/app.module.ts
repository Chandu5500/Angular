import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagsComponent } from './bags/bags.component';
import { BagComponent } from './bag/bag.component';

@NgModule({
  declarations: [
    AppComponent,
    BagsComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
