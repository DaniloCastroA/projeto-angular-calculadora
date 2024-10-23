import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloNovoComponent } from './modulo-novo.component';
import { ServicoNovoService } from './servico-novo.service';



@NgModule({
  declarations: [
    ModuloNovoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuloNovoComponent
  ],
  providers:[
    ServicoNovoService
  ]
})
export class ModuloNovoModule { }
