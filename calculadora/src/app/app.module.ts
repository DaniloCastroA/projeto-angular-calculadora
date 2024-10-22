import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloNovoModule } from './modulo-novo/modulo-novo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloNovoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
