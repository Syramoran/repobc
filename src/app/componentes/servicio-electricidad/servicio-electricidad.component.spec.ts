import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioElectricidadComponent } from './servicio-electricidad.component';

describe('ServicioElectricidadComponent', () => {
  let component: ServicioElectricidadComponent;
  let fixture: ComponentFixture<ServicioElectricidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioElectricidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioElectricidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
