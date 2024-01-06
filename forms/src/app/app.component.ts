import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateDrivenFormsComponent, ReactiveFormsComponent],
  template: `
    <router-outlet></router-outlet>

    <app-template-driven-forms />
    <!-- <app-reactive-forms /> -->
  `
})
export class AppComponent {
  title = 'forms';
}
