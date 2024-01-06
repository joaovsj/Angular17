import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Dependencies to work with Reactive Forms
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  name = new FormControl('João Jesus');

  public updateName(){
    this.name.setValue("Valor Novo");
  }

}
