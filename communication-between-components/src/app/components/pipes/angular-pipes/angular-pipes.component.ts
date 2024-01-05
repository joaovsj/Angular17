import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';

// Registrando dados da localidade
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers:  [{ provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class AngularPipesComponent {

  public currentDate = signal(new Date());
}
