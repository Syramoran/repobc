import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ModalFormularioComponent } from '../modal-formulario/modal-formulario.component';

declare var MercadoPago: any;

@Component({
  selector: 'app-servicios-refrigeracion',
  imports: [CommonModule, ModalFormularioComponent],
  templateUrl: './servicios-refrigeracion.component.html',
  styleUrl: './servicios-refrigeracion.component.css'
})
export class ServiciosRefrigeracionComponent {

  publicKey = environment.mercadoPagoPublicKey;
  constructor(private http: HttpClient) { }

  servicios = [
    {
      id: '1',
      nombre: "Visita técnica",
      descripcion: "Chequeamos tu equipo, te decimos qué problema tiene y te pasamos un presupuesto final para que tomes la decisión que sea más conveniente para vos.",
      precio: 10000,
      icon: 'bi-search'
    },
    {
      id: '2',
      nombre: "Limpieza",
      descripcion: "Mantenimiento y limpieza preventiva con chequeo de sistema. Limpiamos el equipo completo y revisamos el consumo y el gas, para prepararlo para el uso intensivo.",
      precio: 50000,
      icon: 'bi-droplet-half'
    },
    {
      id: '3',
      nombre: "Instalación",
      descripcion: "Instalaciones standard de aire acondicionado. Precio final con mano de obra y materiales incluidos.",
      precio: 200000,
      icon: 'bi-tools'
    },
  ]

  // comprar(servicioId: string) {
  //   // Mostrar estado de carga
  //   let loading = true;

  //   this.http.post<{ id: string }>(
  //     'https://repobackbc.onrender.com/crear-preferencia',
  //     { servicio: servicioId }
  //   ).subscribe({
  //     next: (data) => {
  //       if (data?.id) {
  //         console.log('Preferencia creada:', data);
  //         window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${data.id}`;
  //       } else {
  //         console.error('Respuesta inesperada:', data);
  //         alert('No se recibió un ID de preferencia válido');
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error completo:', err);
  //       let errorMessage = 'Error al procesar el pago';

  //       if (err.error?.error) {
  //         errorMessage = err.error.error;
  //         if (err.error.details) {
  //           errorMessage += `: ${err.error.details}`;
  //         }
  //       }

  //       alert(errorMessage);
  //     },
  //     complete: () => {
  //       // Ocultar estado de carga
  //       loading = false;
  //     }
  //   });
  // }

  modalActivo = false;
  servicioSeleccionado = '';

  comprar(servicioId: string) {
    const servicio = this.servicios.find(s => s.id === servicioId);
    if (servicio) {
      this.servicioSeleccionado = servicio.nombre;
      this.modalActivo = true;
    }
  }

  cerrarModal() {
    this.modalActivo = false;
  }


  // async renderWalletBrick(preferenceId: string) {
  //   const mp = new MercadoPago(this.publicKey);
  //   const bricksBuilder = mp.bricks();

  //   // Eliminamos botón anterior si ya existía
  //   const container = document.getElementById('walletBrick_container');
  //   if (container) container.innerHTML = '';

  //   await bricksBuilder.create("wallet", "walletBrick_container", {
  //     initialization: {
  //       preferenceId: preferenceId
  //     }
  //   });
  // }



  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp', 'opacity-100'); // Mostrar y animar
          entry.target.classList.remove('opacity-0'); // Sacar invisible
        }
      });
    }, { threshold: 0.5 });

    const elements: NodeListOf<Element> = document.querySelectorAll('.lazyCard');
    elements.forEach((el) => observer.observe(el));
  }
}
