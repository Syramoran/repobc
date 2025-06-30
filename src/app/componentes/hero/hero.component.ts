import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp', 'opacity-100');
          entry.target.classList.remove('opacity-0');
        } else {
          // Cuando sale de la pantalla, quitar la animación y volver a invisible
          entry.target.classList.remove('animate__fadeInUp', 'opacity-100');
          entry.target.classList.add('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const elements: NodeListOf<Element> = document.querySelectorAll('.lazyHero');
    elements.forEach((el) => observer.observe(el));
  }

}
