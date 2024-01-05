import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe, registerLocaleData } from '@angular/common';
import { Component, signal } from '@angular/core';

// Pipe Customizado
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';
import { AgePipe } from '../../../pipes/age.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomStringPipe, AgePipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'  
})
export class AngularPipesComponent {

  public currentDate = signal(new Date());
}
