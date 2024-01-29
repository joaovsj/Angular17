import { Routes } from '@angular/router';

// GUARDS
import { canActiveChildGuard } from './guard/can-active-child.guard';
import { canActiveMatchGuard } from './guard/can-active-match.guard';

// COMPONENTS
export const routes: Routes = [
    {
        path: 'curso',
        loadChildren: () => import('./pages/curso.routes').then((rout) => rout.pageRoutes),
        // canActivateChild: [canActiveChildGuard] // protege a rota de form global
        canMatch: [canActiveMatchGuard]


        // path: '',
        // children: [ // podemos trabalhar com rotas filhas através de um índice chamado CHILDREN
        //     {
        //         path: '', 
        //         loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent)
        //     },
        //     {
        //         path: 'sobre', 
        //         loadComponent: () => import('./pages/about/about.component').then((p)=> p.AboutComponent)
        //     },
        //     {
        //         path: 'servicos/:subject',
        //         loadComponent: () => import('./pages/jobs/jobs.component').then((p) => p.JobsComponent)
        //     }
        // ]
    },
    {
        path: '**',
        title: 'Not Found',
        // se na declaração do component estiver DEFAULT não precisamos colocar o .THEN
        loadComponent: () => import('./pages/not-found/not-found.component'), 
    }
];
