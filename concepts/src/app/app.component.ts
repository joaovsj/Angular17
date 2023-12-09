import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { PropertyBindingComponent } from './components/template/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, TemplateBindingComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'concepts';
}
