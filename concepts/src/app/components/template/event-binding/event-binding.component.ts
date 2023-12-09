import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  public clientTop = 100
  public clientLeft = 100



  showValues(event: MouseEvent){

    this.clientTop = event.clientY;
    this.clientLeft = event.clientX;

    // console.log(event.clientX);

  }

}
