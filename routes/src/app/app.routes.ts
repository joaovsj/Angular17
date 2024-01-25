import { Routes } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        children: [ // podemos trabalhar com rotas filhas através de um índice chamado CHILDREN
            {
                path: 'sobre', 
                component: AboutComponent
            },
            {
                path: 'servicos',
                component: JobsComponent
            }
        ]
    },
    {
        path: '**',
        title: 'Not Found',
        component: NotFoundComponent
    }
];
