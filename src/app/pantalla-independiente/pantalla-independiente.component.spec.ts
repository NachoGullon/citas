import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaIndependienteComponent } from './pantalla-independiente.component';

describe('PantallaIndependienteComponent', () => {
  let component: PantallaIndependienteComponent;
  let fixture: ComponentFixture<PantallaIndependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PantallaIndependienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaIndependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
