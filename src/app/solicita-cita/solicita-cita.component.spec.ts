import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaCitaComponent } from './solicita-cita.component';

describe('SolicitaCitaComponent', () => {
  let component: SolicitaCitaComponent;
  let fixture: ComponentFixture<SolicitaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
