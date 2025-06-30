import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {
        path: '', component: HeroComponent
    },
    { path: 'sobre-nosotros',  loadComponent: () => import('./sobre-nosotros/sobre-nosotros.component')
    .then(m => m.SobreNosotrosComponent) },
    { path: '**', redirectTo: '' }
];
