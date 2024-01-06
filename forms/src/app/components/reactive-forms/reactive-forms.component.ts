import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Dependencies to work with Reactive Forms
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    })
  });


  // name = new FormControl('João Jesus');

  public updateProfile(){
    this.profile.patchValue({
      name: "Pedro",
      age: 14,
      stacks: {
        front: 'VueJs',
        back: "Java"
      }
    });
  }

}
