import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {


  public profile = new FormGroup({
    name: new FormControl('joao'),
    age: new FormControl(18),

    stacks: new FormGroup({
      front: new FormControl("Angular 17"),
      back: new FormControl("Laravel")
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
