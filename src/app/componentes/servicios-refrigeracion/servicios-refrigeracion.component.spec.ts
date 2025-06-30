import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosRefrigeracionComponent } from './servicios-refrigeracion.component';

describe('ServiciosRefrigeracionComponent', () => {
  let component: ServiciosRefrigeracionComponent;
  let fixture: ComponentFixture<ServiciosRefrigeracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosRefrigeracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosRefrigeracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
