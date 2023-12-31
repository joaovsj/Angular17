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

  constructor(){
    this.marginCurrent = 0;
  }

  ngOnInit(){
    // setInterval(() => {

    //   if(this.marginCurrent === 1400){
    //     this.marginCurrent = 0;
    //   }else{
    //     this.marginCurrent+=700;
    //   }
    // }, 4000)
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
