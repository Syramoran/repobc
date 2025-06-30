import { Component } from '@angular/core';
import { HeroComponent } from '../componentes/hero/hero.component';
import { ServiciosRefrigeracionComponent } from '../componentes/servicios-refrigeracion/servicios-refrigeracion.component';
import { ServicioElectricidadComponent } from '../componentes/servicio-electricidad/servicio-electricidad.component';
import { ContactoComponent } from '../componentes/contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServiciosRefrigeracionComponent, ServicioElectricidadComponent,ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
