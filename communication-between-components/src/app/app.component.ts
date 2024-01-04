import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    PaiOuMaeComponent
  ],
  template: `
    <router-outlet></router-outlet>
    
    <h1>Comunicação entre Components</h1>
    
    <!-- Component PAI -->
    <app-pai-ou-mae />
  `,
})
export class AppComponent {
  title = 'communication-between-components';
}
