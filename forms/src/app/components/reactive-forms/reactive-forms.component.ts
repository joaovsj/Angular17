import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Dependencies to work with Reactive Forms
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  public profile = new FormGroup({
    name: new FormControl("joao"),
    age: new FormControl(18),

    stacks: new FormGroup({

      front: new FormControl("Angular"),
      back: new FormControl("Laravel"),
    }),

    // FormArray é iteravel e nos permite trabalhar com funções de array dentro da estrutura do Formulário
    favoriteFood: new FormArray([new FormControl("apple"),new FormControl("lemon")])

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




  public addNewFood(someFood: string){  

    // com o GET pegamos o acesso - as FormArray permite que trabalhemos com funções de Array 
    const favoriteFood = this.profile.get('favoriteFood') as FormArray; 
    const newFood = new FormControl(someFood);  
    
    favoriteFood.push(newFood)

  }


}
