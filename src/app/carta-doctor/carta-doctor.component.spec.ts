import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDoctorComponent } from './carta-doctor.component';

describe('CartaDoctorComponent', () => {
  let component: CartaDoctorComponent;
  let fixture: ComponentFixture<CartaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
