import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoes-calculadora',
  templateUrl: './botoes-calculadora.component.html',
  styleUrl: './botoes-calculadora.component.css'
})
export class BotoesCalculadoraComponent {
  @Input() value: string = '';

  @Output() clickEvent = new EventEmitter<string>();
  
  onClick(): void {
    this.clickEvent.emit(this.value);
  }
}
