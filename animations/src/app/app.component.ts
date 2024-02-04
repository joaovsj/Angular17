import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// COMPONENTS
import { AnimationsComponent } from './components/animations/animations.component';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnimationsComponent, TestComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  
      <!-- <h1>Angular 17</h1> -->


      <app-animations />
      <app-test />
  `
})
export class AppComponent {
  title = 'animations';
}
