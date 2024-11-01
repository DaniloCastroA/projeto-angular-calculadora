import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  contador: number = 0;

  valorDigitado: string = "0";

  botaoClicado(value: string): void {
    if (this.contador == 0){
      this.valorDigitado=value;
      this.contador=1;
    }
    else{
      this.valorDigitado += value; 
    }
  }
}