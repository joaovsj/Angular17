import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

// Dependencies to work with Reactive Forms
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder);

  // constructor(
  //   private _fb: FormBuilder
  // ){} 

  /*
    FORM BUILDER

    É uma classe que nos permite trabalharmos com outras classes de Formularios Reativos no Angular,
    como ARRAY, CONTROL, etc.. através dela, não precisamos ficar declarando como NEW toda hora que
    quisermos usar.
  */ 



  // public profile = new FormGroup({
  //   name: new FormControl("joao"),
  //   age: new FormControl(18),

  //   stacks: new FormGroup({

  //     front: new FormControl("Angular"),
  //     back: new FormControl("Laravel"),
  //   }),

  //   // FormArray é iteravel e nos permite trabalhar com funções de array dentro da estrutura do Formulário
  //   favoriteFood: new FormArray([new FormControl("apple"),new FormControl("lemon")])

  // });

  public profile = this.#fb.group({
      name: [''],
      age: [18],
  
      stacks: this.#fb.group({
  
        front: ["Angular"],
        back: ["Laravel"],
      }),
  
      // FormArray é iteravel e nos permite trabalhar com funções de array dentro da estrutura do Formulário
      favoriteFood: this.#fb.array([
        ['apple'],
        ['lemon']
      ])
  
    });
  
  public adress = new FormControl("");


  // name = new FormControl('João Jesus');
  public updateProfile(){
    this.profile.patchValue({
      name: "Pedro",
      age: 14,
      stacks: {
        front: 'VueJs',
        back: "Java"
      },
    });
  }



  // Forma de criarmos Formulários iteráveis
  public addNewFood(someFood: string){  

    // com o GET pegamos o acesso - as FormArray permite que trabalhemos com funções de Array 
    const favoriteFood = this.profile.get('favoriteFood') as FormArray; 
    const newFood = new FormControl(someFood);  
    
    favoriteFood.push(newFood)

  }


}
