import { Routes } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JobsComponent } from './pages/jobs/jobs.component';

export const routes: Routes = [
    {
        path: '', 
        title: 'Início - Angular 17', // referente ao título da pagina
        component: HomeComponent
    },
    {
        path: 'sobre',
        title: 'Sobre nós - Angular 17',
        component: AboutComponent
    },
    {
        path: 'nossos-servicos/:subject',
        title: 'Serviços - Angular 17',
        component: JobsComponent
    }
];
