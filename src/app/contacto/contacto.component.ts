import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required, Validators.maxLength(300)],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      console.log('Formulario enviado:', data);
      // Podés conectar con backend o servicio de email acá
      this.form.reset();
    }
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInRight', 'opacity-100');
          entry.target.classList.remove('opacity-0');
        } //else {
          // Cuando sale de la pantalla, quitar la animación y volver a invisible
          // entry.target.classList.remove('animate__fadeInUp', 'opacity-100');
          // entry.target.classList.add('opacity-0');
        //}
      });
    }, { threshold: 0.1 });

    const elements: NodeListOf<Element> = document.querySelectorAll('.lazyIlustration');
    elements.forEach((el) => observer.observe(el));
  }
}
