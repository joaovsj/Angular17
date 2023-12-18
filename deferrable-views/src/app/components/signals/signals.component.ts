import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal("Joao ");
  public lastName = signal("Jesus")

  // Apenas receber o valor de um Signal não o faz REATIVO
  public fullName = computed(() => {
    return this.firstName() + this.lastName()
  }) 


  constructor(){
    effect(()=>{
      console.log(this.fullName());
    });
  }

  public items = signal([1,2]);

  public address = signal("Rua Martins Rosa de Novaes");

  public showAddress(newAddress: string){

    this.address.set(newAddress);
    console.log(this.address());
  }

  public updateName(){
    this.firstName.set("Pedro");
  }

  public updateArray(){

    this.items.update((oldValues) => {
      console.log(oldValues);
      return [...oldValues, oldValues.length + 1]
    })

    // console.log(this.items().push(1));
  }

}
