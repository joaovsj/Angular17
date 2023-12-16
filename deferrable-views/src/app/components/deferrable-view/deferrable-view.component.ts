import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponentComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './deferrable-view.component.html',
  styleUrl: './deferrable-view.component.scss'
})
export class DeferrableViewComponent {

}
