import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ServiciosRefrigeracionComponent } from '../servicios-refrigeracion/servicios-refrigeracion.component';
import { ElectricidadComponent } from '../electricidad/electricidad.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ServiciosRefrigeracionComponent, ElectricidadComponent, ContactoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {


}
