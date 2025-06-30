import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModalFormularioComponent } from '../modal-formulario/modal-formulario.component';


@Component({
  selector: 'app-servicios-refrigeracion',
  imports: [CommonModule, ModalFormularioComponent],
  templateUrl: './servicios-refrigeracion.component.html',
  styleUrl: './servicios-refrigeracion.component.css'
})
export class ServiciosRefrigeracionComponent {

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
}
