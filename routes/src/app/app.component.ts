import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OptImageComponent } from './components/opt-image/opt-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OptImageComponent],
  template: `
  <!-- <router-outlet></router-outlet>   -->
    <app-opt-image/>
    
  `,
})
export class AppComponent {
  title = 'routes';
}
