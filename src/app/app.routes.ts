import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { path: 'sobre-nosotros',  loadComponent: () => import('./sobre-nosotros/sobre-nosotros.component')
    .then(m => m.SobreNosotrosComponent) },
    { path: '**', redirectTo: '' }
];
