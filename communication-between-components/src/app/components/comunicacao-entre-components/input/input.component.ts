import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';



function changeName(someName: string){
  return someName + " Jesus"
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})



export class InputComponent {

  public fullName = signal("");


  /** 
    Input é um decorador que define um variavel que vai servir de "porta" quando o componente 
    for chamado para podemos passar valores do componente PAI para o compoenente FILHO
    
    MyComponent.ts
    
    @Input({
      // Aqui dentro é um objeto com algumas propriedades
  
      alias: string                        // apelido de como vai ser passado o valor para o componente 
      required: boolean                    // Se for obrigatório ou não
      transform: nomeDeUmaFuncao           // função que faz alguma alteração no valor enviado
    })
   * 
   */


  @Input({
    transform: changeName
  }) set someName (name: string){
    this.fullName.set(name);
  };


 

  @Input({ alias: "name" }) public inputName = signal("Sem dados")

  @Input({required: false}) public nameOfClass = ""  
  @Input({required: false}) public text = ""



}


