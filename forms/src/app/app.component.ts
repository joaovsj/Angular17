import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TrainingComponent } from './components/training/training.component';
import { FormGroupComponent } from './components/form-group/form-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateDrivenFormsComponent, ReactiveFormsComponent, TrainingComponent, FormGroupComponent],
  template: `
    <router-outlet></router-outlet>

    <!-- <app-template-driven-forms /> -->
    <app-reactive-forms />
    <!-- <app-training /> -->
    <!-- <app-form-group /> -->
  `
})
export class AppComponent {
  title = 'forms';
}
