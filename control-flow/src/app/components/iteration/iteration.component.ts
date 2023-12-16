import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

/**
 *  RXJS = é uma biblioteca muito utilizada no Angular, para se trabalhar com 
 *  os estados da sua aplicação, até porque ela é uma biblioteca javascript reativa
 *  que permite controlar o fluxo de dados no nosso sistema. 
 */


@Component({
  selector: 'app-iteration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iteration.component.html',
  styleUrl: './iteration.component.scss'
})
export class IterationComponent {

  // OF = converte os argumentos para um observable sequencial
  public loadingData$: Observable<string[]> = of([
    'João',
    'Pedro',
    'Carlos',
    'Nathália'
  ]).pipe(delay(3000))

  // Parameters of For
  public items = [
    { name: "Rebeca"},
    { name: "Thalita" },
    { name: "Ana"}
  ];

  // Empty
  public  cars = [
    "Toro",
    "Kwid",
    "Gol"
  ];


  



}
