import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// INTERFACE
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  // Quanto colocamos Experiences[] significa que é um array
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Auxiliar Backoffice",
        p: "Flex Soluções | Jun 2023 - Present"
      },
      text: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur facilis fugit dolore rem. Accusantium numquam, reprehenderit expedita facilis natus non esse culpa aperiam atque architecto debitis alias tempora rerum totam id ipsum ratione laudantium facere, dolore voluptatem aut aliquid! Perferendis dolorum recusandae unde facere autem provident vel ducimus enim?</p>"
    },
    {
      summary: {
        strong: "Auxiliar Desenvolvimento",
        p: "Dev Quantis | Set - Out"
      },
      text: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur facilis fugit dolore rem. Accusantium numquam, reprehenderit expedita facilis natus non esse culpa aperiam atque architecto debitis alias tempora rerum totam id ipsum ratione laudantium facere, dolore voluptatem aut aliquid! Perferendis dolorum recusandae unde facere autem provident vel ducimus enim?</p>"
    }
  ])

}
