import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
  loop: true,
  // slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    0: {          // mobile
      slidesPerView: 1.2,  // o 'auto' si querés scroll libre
    },
    640: {       // sm
      slidesPerView: 2.2,
    },
    768: {       // md
      slidesPerView: 3.2,
    }},

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '#nextSlide',
    prevEl: '#prevSlide'
  },
});
  }
}
