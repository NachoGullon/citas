import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaFamiliarComponent } from './visita-familiar.component';

describe('VisitaFamiliarComponent', () => {
  let component: VisitaFamiliarComponent;
  let fixture: ComponentFixture<VisitaFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitaFamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
