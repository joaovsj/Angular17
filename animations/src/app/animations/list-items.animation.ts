import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const maxMedia600 = trigger('list-items', [

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
        ])


      ])
    ])
])


// retorna sua animação de acordo com o tamanho da tela que voce especificar
export const listItemsAnimation = () => {

    // É MAIOR QUE 600 
    if(isMatchMedia(600)){
        return maxMedia600;
    }

    // SE FOR MENOR QUE 600
    return;
}

// FUNÇÃO RESPONSÁVEL POR VERIFICA O TAMANHO DA TELA
const isMatchMedia = (value: number) => {
    return matchMedia(`(min-width: ${value}px)`).matches;
}

