import { animate, group, keyframes, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


// ANIMAÇÃO QUE NÓS CRIAMOS
import { listItemsAnimation } from '../../animations/list-items.animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
    
    listItemsAnimation()
    
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


  public addNewItem(title: string){
    return this.listItems.update(oldValue => [...oldValue, { name: title }])
  }

}
