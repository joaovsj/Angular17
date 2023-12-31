import { Component, signal } from '@angular/core';
import { OutputComponent } from '../output/output.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-pai-ou-mae',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.scss'
})
export class PaiOuMaeComponent {

  public $name = "teste"


  public showMessage(message: string){
    window.alert(message)    
  }

  public newName = signal("Valor inicial")

  public receiveName(value: any){
    console.log(value);
  }

  public setAge(event: number){
    console.log(event);
  }

  public showData(eventData: Event){
    console.log(eventData);
  }

  // public receiveName(name: string) {
  //   console.log(name);
  // }


}


