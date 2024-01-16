import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConsumerComponent } from './components/consumer/consumer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ConsumerComponent
  ],
  template: `

    <router-outlet></router-outlet>
    <app-consumer />
  `,
})
export class AppComponent {
  title = 'services';
}
