import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const listItemsAnimation = trigger('list-items', [
    
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


        // EXCECUTA AS ANIMAÇÔES EM SEQUENCIA
        sequence([
          animate('.2s', style({
            transform: 'translateX(-50px)'
          })),
          animate('.2s', style({
            opacity: 0,
            transform: 'translateX(100px)'
          })),
          // animate('3s', style({
          //   background: 'green'
          // }))
        ])

        // style({
        //   opacity: 1
        // }),
        // style({
        //   transform: 'translateX(-50px)'
        // }),
        // animate('.8s', style({ 
        //   transform: 'translateX(10px)',
        //   opacity: 0 
        // }))
      ])
    ])
  ])