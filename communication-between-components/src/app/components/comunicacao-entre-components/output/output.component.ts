import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputName = new EventEmitter();

  // Sempre vai existir uma função para poder enviar essa informação para fora
  public sendName(){
    return this.outputName.emit("Esse é o valor enviado para o Output");
  }

}
