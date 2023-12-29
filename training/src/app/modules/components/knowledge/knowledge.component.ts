import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public knowledges = signal<Iknowledge[]>([
    {
      src: "assets/img/icons/html5.svg",
      alt: "HTML 5"
    },
    {
      src: "assets/img/icons/sass.svg",
      alt: "Sass"
    },
    {
      src: "assets/img/icons/angular.svg",
      alt: "Angular"
    },
    {
      src: "assets/img/icons/laravel.svg",
      alt: "Laravel"
    },
    {
      src: "assets/img/icons/bootstrap.svg",
      alt: "Bootstrap 5"
    },
    {
      src: "assets/img/icons/python.svg",
      alt: "Python"
    }
  ]);

}


