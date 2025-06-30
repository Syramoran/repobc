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
      spaceBetween: 12,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
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
          slidesPerView: 3,
        },
      }
    });
  }
}
