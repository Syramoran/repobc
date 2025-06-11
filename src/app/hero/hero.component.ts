import { Component } from '@angular/core';
import { ServiciosRefrigeracionComponent } from '../servicios-refrigeracion/servicios-refrigeracion.component';

@Component({
  selector: 'app-hero',
  imports: [ServiciosRefrigeracionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
