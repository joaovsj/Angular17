import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_LOADER, ImageLoaderConfig, provideImgixLoader } from '@angular/common';


import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    // provideImgixLoader(environment.img), 

    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {

        const img = config.src.split('.') // dividindo array
        const name = img.shift();         // pegando o nome
        const type = img.pop();      // pegando a extensão
        const width = config.width;

        
        console.log(`${environment.img}${name}-${width}.${type}`);


        return `${environment.img}${name}-${width}.${type}`;
      },
    }

  ]

};
