import { ProcessadorSimples } from "./processador-simples";
import { ProcessadorSimplesDiferente } from "./processador-simples-diferente";


export class CalculadoraLogica {

  private static processador: ProcessadorSimplesDiferente = new ProcessadorSimplesDiferente();

  public static pegaConteudoVisor(): string {
    return this.processador.display()
  }

  public static entraTecla(key: string) {
    this.processador.pressKey(key);

  }
}
