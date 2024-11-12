import { Component } from '@angular/core';
import { CalculadoraLogica } from './logic/calculadora-logica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  valorDigitado: string = "0";

  botaoClicado(value: string): void {
    CalculadoraLogica.entraTecla(value);
    this.valorDigitado = CalculadoraLogica.pegaConteudoVisor();
  }
}