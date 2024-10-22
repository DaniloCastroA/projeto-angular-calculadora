import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloNovoComponent } from './modulo-novo.component';



@NgModule({
  declarations: [
    ModuloNovoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuloNovoComponent
  ]
})
export class ModuloNovoModule { }
