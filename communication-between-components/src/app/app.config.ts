import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

// REGISTRANDO A LOCALIDADE
import localePt  from '@angular/common/locales/pt'
registerLocaleData(localePt)


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: LOCALE_ID, useValue: 'pt-BR'}]


  // providers:  [{ provide: LOCALE_ID, useValue: 'pt-BR'}]
};
