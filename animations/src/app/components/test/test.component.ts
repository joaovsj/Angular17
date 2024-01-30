import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: [
    trigger('move-ball', [
      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),  
      state('move-right', style({
        transform: 'scale(1) rotate(450deg)',
        marginLeft: '700px'
      })),
      state('expand', style({
        transform: 'scale(10)'
      })),

      // de para BIDIMENSIONAL [animate(duração, delay, tipo)]
      transition('* => move-right', animate('1s 2s ease')),
      transition('* => move-left', animate('1s 2s ease')),
      transition('* => expand', animate('2s'))
    ])
  ]
})
export class TestComponent implements OnInit{

  public moveIn = signal('move-right')

  ngOnInit(){
    setTimeout(()=>{

      if(this.moveIn() === 'move-right'){
        this.moveIn.set('expand')
      }
      // if(this.moveIn() == 'move-right'){
      //   this.moveIn.set('move-left')  
      // }
      
      // if(this.moveIn() == 'move-left'){
      //   this.moveIn.set('expand')
      // }  

    }, 4000)
  }

}
