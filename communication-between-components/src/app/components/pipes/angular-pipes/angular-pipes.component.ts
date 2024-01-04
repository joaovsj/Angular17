import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {

  public currentDate = signal(new Date());
}
