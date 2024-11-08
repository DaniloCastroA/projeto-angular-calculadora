export class CalculadoraLogica {

  private static visor: string = "0";
  static contador: number = 0;

  public static pegaConteudoVisor(): string {
    return CalculadoraLogica.visor;
  }

  public static entraTecla(key: string) {
    if(this.contador==0){
      CalculadoraLogica.visor=key;
      this.contador++;
    }
    else if(key=="c"){
      CalculadoraLogica.visor="0";
      this.contador=0;
    }
    else if(key>"0" && key<"9"){
      CalculadoraLogica.visor=CalculadoraLogica.visor+key;
    }
  }
}