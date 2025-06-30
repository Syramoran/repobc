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

}
