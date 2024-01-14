import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { ContentComponent } from './components/content/content.component';
import { PracticingComponent } from './components/practicing/practicing.component';
import { LifeCyclesComponent } from './components/life-cycles/life-cycles.component';
import { OtherComponent } from './components/other/other.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentComponent, PracticingComponent, LifeCyclesComponent, OtherComponent],
  template: `

    <router-outlet></router-outlet>
  

    <!-- 
      NG CONTENT 
    
      É uma forma de passarmos HTML para um component.#header

      <app-component>

        <h5 title> esse é um titulo </h5>

      </app-component>


      app-component
        podemos acessar através de um ALIAS ou CLASS e ID
        <ng-content select="[title]"></ng-content>

    -->
    <!-- <app-content>

      <header id="header">Esse é o meu cabeçalho</header>

      <p text>Texto de exemplo</p>
      <p text>Texto de exemplo</p>

      <footer class="footer">
        Esse é meu footer &copy; 
      </footer>

    </app-content> -->

    <!-- <app-practicing>
      
      <h5 title>Esse é um texto de exemplo</h5> 

      <img src="https://picsum.photos/250/200" alt="lorem picsum" img>

      <div description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente.
      </div>

    </app-practicing> -->

    <!-- <app-life-cycles [name]="nameChange" (resetName)="reset($event)" /> -->

    @if(visible){

      <app-other [inputMyNumber]="number()"> 
        <p #text>Texto do content</p>
      </app-other>

    }

    <button (click)="visible = !visible">Change Property of Visibility</button>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  title = 'life-cycles';
  visible: boolean = true;
  number = signal<number>(0);

  ngOnInit(): void {
    setInterval(() => {
      this.number.update((oldValue) => {
        return oldValue + 1;
      })
    }, 1000)
  }

  // public nameChange: string = ""

  // // método executado depois que o component é construído e assim INICIALIZADO.
  // ngOnInit(): void {
   
  //   setInterval(()=>{

  //     switch (this.nameChange) {
  //       case "":
  //         this.nameChange = "João"  
  //         break;

  //       case "João":
  //         this.nameChange = "João Victor"  
  //         break;

  //       case "João Victor":
  //         this.nameChange = "João Victor Silva"  
  //         break;
      
  //       case "João Victor Silva":
  //         this.nameChange = "João Victor Silva de Jesus"  
  //         break;

  //       default:
  //         console.error('something went wrong!');
  //         break;
  //     }

  //   }, 5000)
  // }

  // public reset(event: boolean){
  //   if(event == true){  
  //     this.nameChange = 
  //   }
  // }
}
