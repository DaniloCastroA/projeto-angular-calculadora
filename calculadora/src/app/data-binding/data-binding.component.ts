import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {

  url: string ='https://loiane.training';
  cursoAngular: boolean= true;

  urlImagem = 'http://lorempixel.com.br/500/400/?1';

  getValor(){
    return 1;
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
