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
export class HeroComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('animate__fadeInUp', 'opacity-100');
            el.classList.remove('opacity-0');
          } else {
            el.classList.remove('animate__fadeInUp', 'opacity-100');
            el.classList.add('opacity-0');
          }
        }
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.lazyHero').forEach((el) => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    // 🔁 Limpieza para evitar fugas de memoria
    this.observer?.disconnect();
  }
}
