import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


@Component({
  selector: 'app-sobre-nosotros',
  imports: [CarrouselComponent],
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

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      spaceBetween: 12,
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
