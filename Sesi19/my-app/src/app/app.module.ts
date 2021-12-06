import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Komponen1Component } from './komponen1/komponen1.component';
import { Komponen2Component } from './komponen2/komponen2.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponen1Component,
    Komponen2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
