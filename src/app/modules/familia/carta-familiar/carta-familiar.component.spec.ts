import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaFamiliarComponent } from './carta-familiar.component';

describe('CartaFamiliarComponent', () => {
  let component: CartaFamiliarComponent;
  let fixture: ComponentFixture<CartaFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaFamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
