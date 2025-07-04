import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormularioComponent } from './modal-formulario.component';

describe('ModalFormularioComponent', () => {
  let component: ModalFormularioComponent;
  let fixture: ComponentFixture<ModalFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
