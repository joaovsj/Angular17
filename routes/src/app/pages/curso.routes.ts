import { Routes } from '@angular/router';

// GUARDS
import { canActivateGuard } from '../guard/can-activate.guard';

// COMPONENTS
export const pageRoutes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./home/home.component').then((p) => p.HomeComponent)
    },
    {
        path: 'sobre', 
        loadComponent: () => import('./about/about.component').then((p)=> p.AboutComponent),
        canActivate: [canActivateGuard] // protege uma única rota
    },
    {
        path: 'servicos/:subject',
        loadComponent: () => import('./jobs/jobs.component').then((p) => p.JobsComponent)
    } 
];
