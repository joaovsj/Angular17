import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { ContentComponent } from './components/content/content.component';
import { PracticingComponent } from './components/practicing/practicing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentComponent, PracticingComponent],
  template: `

    <router-outlet></router-outlet>
  

    <!-- NG CONTENT -->
    <!-- <app-content>

      <header id="header">Esse é o meu cabeçalho</header>

      <p text>Texto de exemplo</p>
      <p text>Texto de exemplo</p>

      <footer class="footer">
        Esse é meu footer &copy; 
      </footer>

    </app-content> -->

    <app-practicing>
      
      <h5 title>Esse é um texto de exemplo</h5> 

      <img src="https://picsum.photos/250/200" alt="lorem picsum" img>

      <div description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente.
      </div>

    </app-practicing>


  `,
})
export class AppComponent {
  title = 'life-cycles';
}
