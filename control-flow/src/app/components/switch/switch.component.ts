
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {

  // quando colocamos exclamação no tipo, significa que a variável não precisa de de um valor inicial
  public state: number = 1;
  public stage: number = 1; 

  receiveCpf(cpf: string){
    // console.log(cpf);
    ++this.state;
    this.stage = 33;
  }

  receiveName(name: string){
    // console.log(name);
    ++this.state;
    this.stage = 66;
  }

  receiveAge(age: string){
    console.log(age);
    ++this.state
    this.stage = 100;
  }
}
