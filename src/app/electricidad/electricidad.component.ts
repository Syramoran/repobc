import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-electricidad',
  imports: [],
  templateUrl: './electricidad.component.html',
  styleUrl: './electricidad.component.css'
})
export class ElectricidadComponent {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeIn', 'opacity-100');
          entry.target.classList.remove('opacity-0');
        } //else {
          // Cuando sale de la pantalla, quitar la animación y volver a invisible
          // entry.target.classList.remove('animate__fadeInUp', 'opacity-100');
          // entry.target.classList.add('opacity-0');
        //}
      });
    }, { threshold: 0.1 });

    const elements: NodeListOf<Element> = document.querySelectorAll('.lazyElement');
    elements.forEach((el) => observer.observe(el));
  }

}
