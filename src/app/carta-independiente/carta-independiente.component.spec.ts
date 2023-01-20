import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaIndependienteComponent } from './carta-independiente.component';

describe('CartaIndependienteComponent', () => {
  let component: CartaIndependienteComponent;
  let fixture: ComponentFixture<CartaIndependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CartaIndependienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaIndependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
