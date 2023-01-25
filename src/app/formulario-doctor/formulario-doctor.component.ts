import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doctor } from '../interface/Doctor';
import { DoctorService } from '../services/doctor.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-formulario-doctor',
  templateUrl: './formulario-doctor.component.html',
  styleUrls: ['./formulario-doctor.component.scss'],
})
export class FormularioDoctorComponent implements OnInit {
  formularioDoctor: FormGroup;
  doctorCreado: Doctor;
  estoyEditando: boolean = false;

  constructor(
    private doctorService: DoctorService,
    private _snackBar: MatSnackBar,
    private sharedService: SharedService
  ) {
    console.log(this.doctorService.nombreDoctor);
      // Añadimos titulo de nuestro shared
      this.sharedService.tituloWeb.next('Crear Nuevo Doctor');
  }

  ngOnInit(): void {
    this.formularioDoctor = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      turno: new FormControl(null, [Validators.required]),
      especialidad: new FormControl(null, [Validators.required]),
      hospital: new FormControl(null, [Validators.required]),
    });
    //Seteando el formulario con el editar
    if (this.doctorService.doctorEditado) {
      this.formularioDoctor.setValue(this.doctorService.doctorEditado);
      //limpiamos la var del service
      //this.doctorService.doctorEditado = null;
      // Nos informar si estámos en modo edicion o creacion.
      this.estoyEditando = true;
    }

    // Cualquier cambio que se haga en el formulario te devuelve todo el formulario cambiado.
    this.formularioDoctor.valueChanges.subscribe((nuevoValor) => {
      console.log(nuevoValor);
      this.doctorCreado = nuevoValor;
    });
  }
  recogeFormulario() {
    console.log('Hola');
    console.log(this.formularioDoctor);

    if (this.formularioDoctor.valid) {
      const doctorCreado: Doctor = this.formularioDoctor.value;
      this.doctorCreado = doctorCreado;

      if (this.estoyEditando) {
        this.doctorService.acutalizoDoctor(doctorCreado).subscribe(()=>{
          this._snackBar.open(
            `Se ha actualizado doctor correctamente ${this.doctorCreado.nombre}`
          );
        });
      } else {
        this.doctorService.crearDoctor(doctorCreado).subscribe((doctorBBDD) => {
          this._snackBar.open(
            `Se ha creado doctor en BBDD ${doctorBBDD.nombre}`
          );
        });
      }
    }
  }
}
