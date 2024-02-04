import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: [
    trigger('modal', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)',
        pointerEvents: 'normal'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(50px)',
        pointerEvents: 'none'
      })),
      transition('* <=> show', animate('.2s ease'))
    ])
  ]
})
export class TestComponent{

  public visible = signal<string>('hide');

}
