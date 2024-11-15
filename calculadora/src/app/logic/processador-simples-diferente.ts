export class ProcessadorSimplesDiferente {
    private displayValue: string = ''; // Visor da calculadora
    private currentValue: string = ''; // Número atual que está sendo digitado
    private operator: string | null = null; // Operador atual (+, -, *, /)
    private previousValue: string = ''; // Valor anterior para cálculos
  
    // Método para processar as teclas
    pressKey(char: string): void {
      // Limpar o visor se a tecla "C" for pressionada
      if (char === 'C') {
        this.clear();
        return;
      }
  
      // Se for um número ou ponto decimal, atualizar o valor atual
      if (/\d|\./.test(char)) {
        this.currentValue += char;
        if(this.operator){
          this.displayValue = this.previousValue + this.operator + this.currentValue;
        }
        else{
          this.displayValue = this.previousValue + this.currentValue;
        }
        
        return;
      }
  
      // Se for um operador (+, -, *, /), armazenar o operador e o valor atual
      if (['+', '-', '*', '/'].includes(char)) {
        if (this.currentValue) {
          this.previousValue = this.currentValue;
          this.currentValue = '';
        }
        this.operator = char;
        if(this.operator){
          this.displayValue = this.previousValue + this.operator + this.currentValue;
        }
        else{
          this.displayValue = this.previousValue + this.currentValue;
        }
        return;
      }
  
      // Se a tecla "=" for pressionada, calcular o resultado
      if (char === '=') {
        if (this.previousValue && this.currentValue && this.operator) {
          this.calculate();
        }
      }
    }
  
    // Método para calcular o resultado
    private calculate(): void {
      const num1 = parseFloat(this.previousValue);
      const num2 = parseFloat(this.currentValue);
  
      if (isNaN(num1) || isNaN(num2)) {
        this.displayValue = 'Error';
        return;
      }
  
      let result: number;
  
      switch (this.operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : NaN; // Evitar divisão por zero
          break;
        default:
          result = NaN;
      }
  
      this.displayValue = isNaN(result) ? 'Error' : result.toString();
      this.previousValue = this.displayValue;  // Mostrar resultado no visor
      this.currentValue = '';
      this.operator = null;
    }
  
    // Método para limpar o visor
    private clear(): void {
      this.displayValue = '';
      this.currentValue = '';
      this.previousValue = '';
      this.operator = null;
    }
  
    // Método para exibir o conteúdo do visor
    display(): string {
      return this.displayValue || '0';
    }
  }
  