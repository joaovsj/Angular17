import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {


  public marginCurrent: number = 0
  public circles = [true, false, false];

  public projects = signal<IProjects[]>([
    {
      id: 1,
      img: {
        src: "assets/img/projects/first.png",
        alt: "imagem"
      },
      details: {
        title: "LaraClothes",
        description: "Site desenvolvido em Laravel 9 para uma loja fictícia de vendas de roupas online. Utiliza recursos muito importantes do Framework: Middlewares, Providers, Migrations, Entre muitas outras coisas...",
        link: {
          linkedIn: "https://www.linkedin.com/posts/jo%C3%A3o-victor-a38512232_antigamente-eu-n%C3%A3o-entendia-porque-muitas-activity-7053912624316432386-S8ju?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/joaovsj/LaravelClothes?tab=readme-ov-file",
        }
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
        link: {
          linkedIn: "",
          github: "",
        }
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
        link: {
          linkedIn: "",
          github: "",
        }
      }
    }
  ])

  constructor(){
    this.marginCurrent = 0;
  }

  ngOnInit(){
    setInterval(() => {
      if(this.marginCurrent === 1400){
        this.marginCurrent = 0;
        this.setColorCircle(0);
      }else{

        if(this.marginCurrent == 0){
          this.setColorCircle(1);
        }else{
          this.setColorCircle(2);
        }

        this.marginCurrent+=700;
      }
    }, 4000)
  }

  changeImage(image: number){

    if(image == 0){
      this.marginCurrent = 0
    }else if(image  == 1){
      this.marginCurrent = 700
    }else{
      this.marginCurrent = 1400
    }

    this.setColorCircle(image);
  }

  setColorCircle(circle: number){
    this.circles.forEach((item, index)=>{
      if(item)
        this.circles[index] = false;
    })
    
    this.circles[circle] = true; 
  }

  

}
