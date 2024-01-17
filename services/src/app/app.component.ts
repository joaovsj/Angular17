import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ConsumerComponent,
    NewComponentComponent
  ],
  template: `

    <router-outlet></router-outlet>
    <!-- <app-consumer /> -->
    <app-new-component />
  `,
})
export class AppComponent {
  title = 'services';
}
