import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoes-calculadora',
  templateUrl: './botoes-calculadora.component.html',
  styleUrl: './botoes-calculadora.component.css'
})
export class BotoesCalculadoraComponent {
  @Input() value: string = '';
  @Input() width: number = 80;
  @Input() margin: number = 10;
  @Input() height: number = 40;
  @Input() fontWeight: string = 'bold';
  @Input() fontSize: number = 35;

  @Output() clickEvent = new EventEmitter<string>();

  onClick(): void {
    this.clickEvent.emit(this.value);
  }
}
