import { HttpClient } from '@angular/common/http';
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

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.maxLength(300)]],
    });

  }

  onSubmit() {
    console.log('hola')
    if (this.form.valid) {
      const data = this.form.value;

      this.http.post('https://repobackbc.onrender.com/api/mail/send', data).subscribe({
        next: (res) => {
          console.log('Enviado:', res);
          this.form.reset();
          alert('Consulta enviada correctamente ✅');
        },
        error: (err) => {
          console.error('Error al enviar:', err);
          alert('Hubo un error al enviar el mensaje ❌');
        },
      });
    }
  }

}