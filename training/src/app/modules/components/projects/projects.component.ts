import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects = signal<IProjects[]>([
    {
      id: 1,
      img: {
        src: "assets/img/projects/first.jpg",
        alt: "teste"
      },
      details: {
        title: "Titulo de exemplo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ad.adipisicing elit. Inventore, adadipisicing elit. Inventore, adadipisicing elit. Inventore, ad",
        link: ""
      }
    },
    {
      id: 2,
      img: {
        src: "assets/img/projects/second.jpg",
        alt: "teste"
      },
      details: {
        title: "Titulo de exemplo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ad.adipisicing elit. Inventore, adadipisicing elit. Inventore, adadipisicing elit. Inventore, ad",
        link: ""
      }
    },
    {
      id: 3,
      img: {
        src: "assets/img/projects/third.jpg",
        alt: "teste"
      },
      details: {
        title: "Titulo de exemplo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ad.adipisicing elit. Inventore, adadipisicing elit. Inventore, adadipisicing elit. Inventore, ad",
        link: ""
      }
    }
  ])

  public current = 0;
  public marginCurrent = 0;

  changeImage(value: number){
    if(value == 2){
      this.marginCurrent = 700
      console.log('teste');
    }
  }

}
