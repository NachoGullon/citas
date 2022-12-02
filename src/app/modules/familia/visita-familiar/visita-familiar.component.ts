import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamiliarService } from 'src/app/services/familiar.service';
import { Familiar } from '../../../interface/Familiar';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-visita-familiar',
  templateUrl: './visita-familiar.component.html',
  styleUrls: ['./visita-familiar.component.scss'],
})
export class VisitaFamiliarComponent implements OnInit {
  visitaFamiliar: FormGroup;
  familiarCreado: Familiar;
  datosFamiliar: Familiar[] = [
    {
      nombre: 'Alonso',
      paciente: 'Belén',
      hospital: 'La paz',
      email: 'alonso@email.com'
    },

    {
      nombre: 'Alonso',
      paciente: 'Belén',
      hospital: 'La paz',
      email: 'alonso@email.com'
    },
  ];
 

  constructor(private sharedService: SharedService, private router: Router, private familiarService: FamiliarService) {
    // Añadimos titulo de nuestro shared
    this.sharedService.tituloWeb.next('Visitas');
  }

  ngOnInit(): void {
    this.visitaFamiliar = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      paciente: new FormControl(null, [Validators.required]),
      hospital: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
    // Cualquier cambio que se haga en el formulario te devuelve todo el formulario cambiado.
    this.visitaFamiliar.valueChanges.subscribe((nuevoValor) => {
      console.log(nuevoValor);
      this.familiarCreado = nuevoValor;
    });
  }
  recogeFormulario() {
    console.log(this.visitaFamiliar);

    if (this.visitaFamiliar.valid) {
      const familiarCreado: Familiar = this.visitaFamiliar.value;
      this.familiarCreado = familiarCreado;
    }
  }
  
}
