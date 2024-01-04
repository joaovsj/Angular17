import { Component } from '@angular/core';
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


  public showMessage(message: string){
    window.alert(message)    
  }


}


