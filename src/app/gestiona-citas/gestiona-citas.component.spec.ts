import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaCitasComponent } from './gestiona-citas.component';

describe('GestionaCitasComponent', () => {
  let component: GestionaCitasComponent;
  let fixture: ComponentFixture<GestionaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionaCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
