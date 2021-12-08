import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomFileSizePipe } from './custom-file-size.pipe';
import { Session23Module } from './session23/session23.module';
import { NoneEncapsulationComponent } from './none-encapsulation/none-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowdomEncapsulationComponent } from './shadowdom-encapsulation/shadowdom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomFileSizePipe,
    NoneEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowdomEncapsulationComponent
  ],
  imports: [
    BrowserModule,
    Session23Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
