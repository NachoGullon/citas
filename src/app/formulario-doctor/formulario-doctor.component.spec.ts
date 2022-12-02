import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDoctorComponent } from './formulario-doctor.component';

describe('FormularioDoctorComponent', () => {
  let component: FormularioDoctorComponent;
  let fixture: ComponentFixture<FormularioDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
