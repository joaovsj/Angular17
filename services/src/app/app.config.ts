import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// Nosso INTERCEPTOR
import { httpInterceptor } from './interceptor/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // assim que trabalhamos com HTTP CLIENT
    provideHttpClient(

      // dentro do nosso provedor de HTTP Client, podemos passar nossos INTERCEPTORS
      withInterceptors([
        httpInterceptor
      ])

    ) 
  ]
};
