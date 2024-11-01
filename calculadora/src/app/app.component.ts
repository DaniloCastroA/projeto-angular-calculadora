import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  contador: number = 0;

  valorDigitado: string = "0";
  valorDigitadoCpy: string = "0";
  valorSuporte: number = 0;
  verificaOperacao: number = 0;

  botaoClicado(value: string): void {
    if (this.valorDigitado=="0" && value=="0"){
      this.contador=0;
    }

    else if (this.contador == 0){
      this.valorDigitado=value;
      this.valorDigitadoCpy=value;
      this.contador=1;
    }


    else{
      this.valorDigitado += value; 
      this.valorDigitadoCpy+=value;
      
    }

    if (this.valorDigitado.charAt(this.valorDigitado.length - 1)<"0" || this.valorDigitado.charAt(this.valorDigitado.length - 1)>"9"){
      this.operacao()
    }


  }
  botaoC():void{
    this.valorDigitado="0";
    this.valorDigitadoCpy="0";
    this.valorSuporte=0;
    this.verificaOperacao=0;
    this.contador=0;
  }
  operacao():void{
    if(this.verificaOperacao===0){
      this.valorSuporte=Number(this.valorDigitadoCpy.slice(0, -1));
      this.valorDigitadoCpy="";
      this.verificaOperacao=1;
      console.log(this.valorDigitadoCpy.length)
      console.log(this.valorDigitadoCpy)
    }
    else{
      console.log(this.valorDigitadoCpy.length)
      console.log(this.valorDigitadoCpy)
      if(this.valorDigitado.charAt(this.valorDigitado.length - 1)==="+"){
        this.soma() 
      }
      if(this.valorDigitado.charAt(this.valorDigitado.length - 1)==="-"){
        this.subtracao()
      }
      if(this.valorDigitado.charAt(this.valorDigitado.length - 1)==="÷"){
        this.divisao()
      }
      if(this.valorDigitado.charAt(this.valorDigitado.length - 1)==="x"){
        this.multiplicacao()
      }
      if(this.valorDigitado.charAt(this.valorDigitado.length - 1)==="="){

        if (this.valorDigitado.charAt(this.valorDigitadoCpy.length-this.valorSuporte.toString().length)==="+"){
          this.soma()
          this.valorDigitado=this.valorSuporte.toString();
        }
        if (this.valorDigitado.charAt(this.valorDigitadoCpy.length-this.valorSuporte.toString().length)==="-"){
          this.subtracao()
          this.valorDigitado=this.valorSuporte.toString();
        }
        if (this.valorDigitado.charAt(this.valorDigitadoCpy.length-this.valorSuporte.toString().length)==="÷"){
          this.divisao()
          this.valorDigitado=this.valorSuporte.toString();
        }
        if (this.valorDigitado.charAt(this.valorDigitadoCpy.length-this.valorSuporte.toString().length)==="x"){
          this.multiplicacao()
          this.valorDigitado=this.valorSuporte.toString();
        }
        
        this.valorDigitado=this.valorSuporte.toString();
      }
    }
  }
  soma():void{
    this.valorSuporte=this.valorSuporte+Number(this.valorDigitadoCpy.slice(0, -1));
  }
  subtracao():void{
    this.valorSuporte=this.valorSuporte-Number(this.valorDigitadoCpy.slice(0, -1));
  }
  multiplicacao():void{
    this.valorSuporte=(this.valorSuporte) * (Number(this.valorDigitadoCpy.slice(0, -1)));
  }
  divisao(): void {
    if (Number(this.valorDigitadoCpy.slice(0, -1)) !== 0) {
      this.valorSuporte = this.valorSuporte / Number(this.valorDigitadoCpy.slice(0, -1));
    } 
    else {
      this.valorDigitado="Infinity";
    }
  }
}