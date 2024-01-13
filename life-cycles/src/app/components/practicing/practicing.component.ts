import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing',
  standalone: true,
  imports: [],
  templateUrl: './practicing.component.html',
  styleUrl: './practicing.component.scss',
  host: {
    'role': 'button',
    'title': 'imagens'
  }
})
export class PracticingComponent {

}
