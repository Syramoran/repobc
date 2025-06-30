import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.css']
})
export class ModalFormularioComponent implements OnInit {
  @Input() servicio = '';
  @Output() cerrado = new EventEmitter<void>();

  form!: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      detalle: ['']
    });
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nombre, direccion, detalle } = this.form.value;

    const msg = `Hola! Quisiera solicitar el servicio de ${this.servicio}.\n
Nombre: ${nombre}
Dirección: ${direccion}
Comentario: ${detalle || '-'}`;

    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
const baseURL = isMobile
  ? 'https://api.whatsapp.com/send'
  : 'https://web.whatsapp.com/send';

const whatsappURL = `${baseURL}?phone=5493434287234&text=${encodeURIComponent(msg)}`;
window.open(whatsappURL, '_blank');

    this.enviado = true;
    setTimeout(() => this.cerrado.emit(), 4000);
  }

  cerrar(): void {
    this.cerrado.emit();
  }
}
