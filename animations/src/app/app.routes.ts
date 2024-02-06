import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        // se na declaração do component estiver DEFAULT não precisamos colocar o .THEN
        loadComponent: () => import('./components/animations/animations.component').then((p) => p.AnimationsComponent), 
    },
    {
        path: 'modal',
        loadComponent: () => import('./components/test/test.component').then((p)=> p.TestComponent)
    }
];
