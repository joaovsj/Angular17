import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {

  #fb = inject(FormBuilder);


  public profile = this.#fb.group({
    name: [''],
    age: [18],

    stacks: this.#fb.group({
      front: ['Angular'],
      back: ['Laravel']
    })
  });

  public updateData(){
    this.profile.patchValue({
      name: "Astronauta Da costa",
      age: 58,
      stacks: {
        front: 'VueJs',
        back: 'Java Spring'
      }
    });
  }

}
