import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { IterationComponent } from './components/iteration/iteration.component';
import { SwitchComponent } from './components/switch/switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlFlowComponent, IterationComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-flow';
}
