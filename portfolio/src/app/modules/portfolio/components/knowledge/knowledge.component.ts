import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// INTERFACE
import { Iknowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent { 
  
  // conhecimentos
  public arrayKnowledge = signal<Iknowledge[]>([
    // quando colocamos o tipo com [] significa que é um array
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimeno de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimeno de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimeno de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimeno de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimeno de Node js'
    },
  ])
}
