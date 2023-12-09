import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { PropertyBindingComponent } from './components/template/property-binding/property-binding.component';
import { StyleBindingComponent } from './components/template/style-binding/style-binding.component';
import { EventBindingComponent } from './components/template/event-binding/event-binding.component';
import { ReferenceVariablesComponent } from './components/template/reference-variables/reference-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    TemplateBindingComponent, 
    PropertyBindingComponent, 
    StyleBindingComponent,
    EventBindingComponent,
    ReferenceVariablesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'concepts';
}
