import { Routes } from '@angular/router';

// COMPONENTS
export const routes: Routes = [
    {
        path: '',
        children: [ // podemos trabalhar com rotas filhas através de um índice chamado CHILDREN
            {
                path: '', 
                loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent)
            },
            {
                path: 'sobre', 
                loadComponent: () => import('./pages/about/about.component').then((p)=> p.AboutComponent)
            },
            {
                path: 'servicos/:subject',
                loadComponent: () => import('./pages/jobs/jobs.component').then((p) => p.JobsComponent)
            }
        ]
    },
    {
        path: '**',
        title: 'Not Found',
        // se na declaração do component estiver DEFAULT não precisamos colocar o .THEN
        loadComponent: () => import('./pages/not-found/not-found.component'), 
    }
];
