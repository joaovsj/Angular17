import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  /**
   *  A lógica do OUTPUT é transformar uma variável/propriedade da sua classe em um EVENTO
   *  
   * 
   *  <button (click)="algumaFuncao($event)" />         => para eu pegar a instancia do evento eu preciso da variavel $event
   *  
   *  <app-algumacoisa (nomeOUTPUT)="algumaFuncao($event)"        => É a mesma coisa!
   * 
   * */ 



  @Output() public outputName = new EventEmitter(); // faz a declaração de uma propriedade comon OUTPUT, propriedade de Saída
  
  @Output() public age = new EventEmitter(); // declara sua propriedade como um OUTPUT

  public sendAge(){
    this.age.emit(18)
  }


  // Sempre vai existir uma função para poder enviar essa informação para fora
  public sendName(){
    this.outputName.emit("Esse é o valor enviado para o Output");
  }


  // Precisa ter uma função para enviar esse valor

}
