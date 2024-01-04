import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    PaiOuMaeComponent,
    AngularPipesComponent
  ],
  template: `
    <router-outlet></router-outlet>
    
    <h1>Comunicação entre Components</h1>
    
    <!-- Component PAI -->
    <!-- <app-pai-ou-mae /> -->
    <app-angular-pipes />
  `,
})
export class AppComponent {
  title = 'communication-between-components';
}
