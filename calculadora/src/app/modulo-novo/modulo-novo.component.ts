import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-novo',
  templateUrl: './modulo-novo.component.html',
  styleUrl: './modulo-novo.component.css'
})
export class ModuloNovoComponent implements OnInit {

  nomePortal: string;
  cursos: string[]=['Cadeira','Vasssoura','Arroz'];

  constructor(){
    this.nomePortal='objetos:';

    for(let i=0; i<this.cursos.length; ++i){
      let curso = this.cursos[i];
    }
  }
  ngOnInit(): void {
    
  }
}
