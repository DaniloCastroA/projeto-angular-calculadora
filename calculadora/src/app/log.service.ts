import { Injectable } from '@angular/core';
import { ProcessadorSimplesDiferente } from './logic/processador-simples-diferente';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraLogica {

  private processador: ProcessadorSimplesDiferente = new ProcessadorSimplesDiferente();

  public pegaConteudoVisor(): string {
    return this.processador.display()
  }

  public entraTecla(key: string) {
    this.processador.pressKey(key);

  }
}
