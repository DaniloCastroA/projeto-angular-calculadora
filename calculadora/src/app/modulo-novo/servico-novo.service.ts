import { Injectable } from '@angular/core';

@Injectable()
export class ServicoNovoService {

  constructor() { }

  getCursos(){
    return ['Cadeira','Vasssoura','Arroz'];
  }
}