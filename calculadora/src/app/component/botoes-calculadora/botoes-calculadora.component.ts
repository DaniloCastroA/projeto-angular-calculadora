import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoes-calculadora',
  templateUrl: './botoes-calculadora.component.html',
  styleUrl: './botoes-calculadora.component.css'
})
export class BotoesCalculadoraComponent {

  @Input() typeButton: "operador" | "c" | "padrao"="padrao";

  @Input() value: string = '';

  @Output() clickEvent = new EventEmitter<string>();
  
  constructor(){ }

  onClick(): void {
    this.clickEvent.emit(this.value);
  }
}
