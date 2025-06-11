import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

declare var MercadoPago: any;

@Component({
  selector: 'app-servicios-refrigeracion',
  imports: [CommonModule],
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

  comprar(servicioId: string) {

    this.http.post<{ id: string }>('http://localhost:4000/crear-preferencia', { servicio: servicioId })
      .subscribe({
        next: (data) => {
          if (data?.id) {
            this.renderWalletBrick(data.id);
          } else {
            alert('No se pudo generar el pago');
          }
        },
        error: (err) => {
          console.error('Error al crear preferencia:', err);
          alert(err.error?.message || 'Error al procesar el pago. Por favor intente más tarde.');
        }
      });
  }

  async renderWalletBrick(preferenceId: string) {
    const mp = new MercadoPago(this.publicKey);
    const bricksBuilder = mp.bricks();

    // Eliminamos botón anterior si ya existía
    const container = document.getElementById('walletBrick_container');
    if (container) container.innerHTML = '';

    await bricksBuilder.create("wallet", "walletBrick_container", {
      initialization: {
        preferenceId: preferenceId
      }
    });
  }
}
