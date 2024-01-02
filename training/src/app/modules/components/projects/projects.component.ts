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
        src: "assets/img/projects/other.png",
        alt: "teste"
      },
      details: {
        title: "Tô Saindo",
        description: "Sistema desenvolvido pra controle de entrada e saída de alunos por causa de janelas na grade curricular, horários na semana que alunos não tem aula e podem sair e entrar fora de horário",
        link: {
          linkedIn: "https://www.linkedin.com/posts/jo%C3%A3o-victor-a38512232_oii-gente-eu-queria-mostrar-um-pouco-activity-7002977676231634944-4i9K?utm_source=share&utm_medium=member_desktop",
          github: "",
        }
      }
    },
    {
      id: 3,
      img: {
        src: "assets/img/projects/third.png",
        alt: "Grade"
      },
      details: {
        title: "Titulo de exemplo",
        description: "Projeto simples desenvolvido em algumas horas vagas em conjunto com um amigo chamado Vitor Miranda. O objetivo era criar uma forma dinâmica de validação de notas, Grades está relacionado a notas/menção escolar em inglês.",
        link: {
          linkedIn: "https://www.linkedin.com/posts/joão-victor-a38512232_em-algumas-instituições-de-ensino-eles-usam-activity-7085350652339470336-OIVD/?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/joaovsj/Grade",
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
    }, 5000)
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
