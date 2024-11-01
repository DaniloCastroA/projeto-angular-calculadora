import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visor-calculadora',
  templateUrl: './visor-calculadora.component.html',
  styleUrl: './visor-calculadora.component.css'
})
export class VisorCalculadoraComponent {

  @Input() content: string = '';

}
