import { ProcessadorSimples } from "./processador-simples";


export class CalculadoraLogica {

  private static processador: ProcessadorSimples = new ProcessadorSimples();

  public static pegaConteudoVisor(): string {
    return this.processador.display()
  }

  public static entraTecla(key: string) {
    this.processador.pressKey(key);

  }

}