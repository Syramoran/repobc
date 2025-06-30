import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PagoExitosoComponent } from './pago-exitoso/pago-exitoso.component';
import { PagoFallidoComponent } from './pago-fallido/pago-fallido.component';
import { PagoPendienteComponent } from './pago-pendiente/pago-pendiente.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
    {
        path: '', component: HeroComponent
    },
    { path: 'sobre-nosotros', component: SobreNosotrosComponent },
    // { path: 'pago-exitoso', component: PagoExitosoComponent },
    // { path: 'pago-fallido', component: PagoFallidoComponent },
    // { path: 'pago-pendiente', component: PagoPendienteComponent },
    { path: '**', redirectTo: '' }
];
