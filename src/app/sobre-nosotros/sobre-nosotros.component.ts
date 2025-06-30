import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp', 'opacity-100'); // Mostrar y animar
          entry.target.classList.remove('opacity-0'); // Sacar invisible
        }
      });
    }, { threshold: 0.3 });

    const elements: NodeListOf<Element> = document.querySelectorAll('.lazyCard');
    elements.forEach((el) => observer.observe(el));
  }
}
