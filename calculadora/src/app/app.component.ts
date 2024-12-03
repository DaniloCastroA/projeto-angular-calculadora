import { Component } from '@angular/core';
import { CalculadoraLogica } from './services/logica/log.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  valorVisor: string = "0";

  constructor(private calculadoraLogica: CalculadoraLogica) { }
  ngOnInit() {
    
  }
  botaoClicado(value: string): void {
    this.calculadoraLogica.entraTecla(value);
    this.valorVisor=this.calculadoraLogica.pegaConteudoVisor();
  }
 
}