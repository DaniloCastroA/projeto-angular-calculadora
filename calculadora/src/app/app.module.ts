import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app_component/app.component';
import { BotoesCalculadoraComponent } from './component/botoes-calculadora/botoes-calculadora.component';
import { VisorCalculadoraComponent } from './component/visor-calculadora/visor-calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    BotoesCalculadoraComponent,
    VisorCalculadoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
