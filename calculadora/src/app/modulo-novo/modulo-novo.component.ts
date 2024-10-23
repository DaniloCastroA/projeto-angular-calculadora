import { Component, OnInit } from '@angular/core';

import { ServicoNovoService } from './servico-novo.service';

@Component({
  selector: 'app-modulo-novo',
  templateUrl: './modulo-novo.component.html',
  styleUrl: './modulo-novo.component.css'
})
export class ModuloNovoComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private servico: ServicoNovoService){
    this.nomePortal='objetos:';

    this.cursos=this.servico.getCursos();

    /*for(let i=0; i<this.cursos.length; ++i){
      let curso = this.cursos[i];
    }*/
   //var servico = new ServicoNovoService
   
  }
  ngOnInit(): void {
    
  }
}
