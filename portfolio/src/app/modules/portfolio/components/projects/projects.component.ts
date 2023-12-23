import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// INTERFACE
import { IProjects } from '../../interface/IProjects.interface';

// MATERIAL
import { MatDialog } from '@angular/material/dialog';

// ENUM
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Components
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog)
  // Tipo =  Array da interface Projects
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius consectetur dicta assumenda perspiciatis quaerat atque numquam ad obcaecati mollitia quisquam repudiandae eaque magni, quis deserunt sapiente consequatur debitis voluptas. Ab molestias nobis architecto cupiditate unde. Obcaecati, recusandae ea repudiandae odit mollitia molestias quis perferendis quae voluptate sapiente, dolor iure.' ,
      links: [
        {name: 'Conheça o Blog', href: 'https://google.com.br'}
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius consectetur dicta assumenda perspiciatis quaerat atque numquam ad obcaecati mollitia quisquam repudiandae eaque magni, quis deserunt sapiente consequatur debitis voluptas. Ab molestias nobis architecto cupiditate unde. Obcaecati, recusandae ea repudiandae odit mollitia molestias quis perferendis quae voluptate sapiente, dolor iure.' ,
      links: [
        {name: 'Conheça o Blog', href: 'https://google.com.br'}
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius consectetur dicta assumenda perspiciatis quaerat atque numquam ad obcaecati mollitia quisquam repudiandae eaque magni, quis deserunt sapiente consequatur debitis voluptas. Ab molestias nobis architecto cupiditate unde. Obcaecati, recusandae ea repudiandae odit mollitia molestias quis perferendis quae voluptate sapiente, dolor iure.' ,
      links: [
        {name: 'Conheça o Blog', href: 'https://google.com.br'}
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius consectetur dicta assumenda perspiciatis quaerat atque numquam ad obcaecati mollitia quisquam repudiandae eaque magni, quis deserunt sapiente consequatur debitis voluptas. Ab molestias nobis architecto cupiditate unde. Obcaecati, recusandae ea repudiandae odit mollitia molestias quis perferendis quae voluptate sapiente, dolor iure.' ,
      links: [
        {name: 'Conheça o Blog', href: 'https://google.com.br'}
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius consectetur dicta assumenda perspiciatis quaerat atque numquam ad obcaecati mollitia quisquam repudiandae eaque magni, quis deserunt sapiente consequatur debitis voluptas. Ab molestias nobis architecto cupiditate unde. Obcaecati, recusandae ea repudiandae odit mollitia molestias quis perferendis quae voluptate sapiente, dolor iure.' ,
      links: [
        {name: 'Conheça o Blog', href: 'https://google.com.br'}
      ]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
} 
