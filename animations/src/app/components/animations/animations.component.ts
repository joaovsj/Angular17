import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  animations: [
    trigger('move-ball', [
      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),  
      state('move-right', style({
        transform: 'scale(0.7) translateX(300px) rotate(360deg)'
      })),

      // de para BIDIMENSIONAL [animate(duração, delay, tipo)]
      transition('* <=> move-right', animate('1s 2s ease')),
      transition('* => move-left', animate('1s 2s ease'))
    ])
  ]
})
export class AnimationsComponent {

  public moveIn = signal('')

}
