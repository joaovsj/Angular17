import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
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
        opacity: 0,
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),  
      state('move-right', style({
        opacity: 1,
        transform: 'scale(0.7) translateX(300px) rotate(360deg)'
      })),

      // de para BIDIMENSIONAL [animate(duração, delay, tipo)]
      transition(':enter', animate('2s', keyframes([  // keyframes é utilizado quando vamos trabalhar com detalhes em segundos
        style({   // 0 SEGUNDO
          background: 'purple',
          opacity: 0.5
        }),
        style({   // 1 SEGUNDO
          background: 'red',
          opacity: 0.5
        }),
        style({   // 2 => ÚLTIMO SEGUNDO
          background: 'green',
          opacity: 1,
          transform: 'scale(0.7) translateX(300px) rotate(360deg)'
        })
      ]))), 
      transition(':leave', animate('1s ease'))
      // transition('* <=> move-right', animate('1s 2s ease')),
      // transition('* => move-left', animate('1s 2s ease')) // mostrar para exemplificar
    ]), 
    trigger('list-items', [
      transition(':enter', [
        query('li', [
          style({
            backgroundColor: 'yellow',
            transform: 'translateY(100px)',
            opacity: 0.1
          }),
          // primeiro valor é referente ao tempo entre as animações(tempo que ele espera para realizar a proxima animação)
          stagger('100ms', [ animate('.7s') ]) // segundo valor é referente ao tempo de cada animação
        ])
      ]),
      transition('* => *', [
        query(':leave', [
            // style({
            //   opacity: 1
            // }),
          style({
            transform: 'translateX(-50px)'
          }),
          animate('.8s', style({ 
            transform: 'translateX(10px)',
            opacity: 0 
          }))
        ])
      ])
    ])
  ]
})
export class AnimationsComponent {

  public moveIn = signal('')

  public listItems = signal([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'}
  ])


  public deleteItem(index: number){
    this.listItems().splice(index, 1)
  }

}
