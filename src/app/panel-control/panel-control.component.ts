import { Cita } from './../interface/Cita';
import { CitasService } from './../services/citas.service';
import { Component, OnInit } from '@angular/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Doctor } from '../interface/Doctor';
import { DoctorService } from '../services/doctor.service';
import { SharedService } from '../services/shared.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SolicitaCitaComponent } from '../solicita-cita/solicita-cita.component';
import { GestionaCitasComponent } from '../gestiona-citas/gestiona-citas.component';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss'],
})
export class PanelControlComponent implements OnInit {
  doctores: Doctor[];
 
  

  constructor(
    private _snackBar: MatSnackBar,
    private doctorService: DoctorService,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private citasService : CitasService
    
  ) {
    console.log(this.doctorService.nombreDoctor);
    this.doctorService.nombreDoctor = 'Alejandro';

    // Añadimos titulo de nuestro shared
    this.sharedService.tituloWeb.next('Panel de Control');
  }


  ngOnInit(): void {
    //console.log("Antes de la recuperación");

    // Solicita la recuperación de los doctores
    this.doctorService.recuperarDoctores().subscribe((doctoresRecuperados) => {
      this.doctores = doctoresRecuperados;
      //Ya he recibido mis doctores
      // console.log("He recuperado los doctores");
    });

    // console.log("Post-recupercaión");
  }
  procesaNuevaCita(doctorSolicitado: Doctor) {

    this.openDialog(doctorSolicitado, SolicitaCitaComponent)

    // Llamada de carta Doctor y lo recoge Panel de control (Comunicación hijo a padre)
    this._snackBar.open(
      `Se ha solicitado cita con el doctor ${doctorSolicitado.nombre}`
    );

    console.log('doctorSolicitado');
  }

  procesaBorradoDoctor(doctorSolicitado: Doctor) {
    // Splice: para borrar en array, necesita posición del elemento y número de elementos a borrar.
   
    //IndexOf para encontrrar la posición en el array, si no existe devuelve -1

    this.doctores.splice(this.doctores.indexOf(doctorSolicitado), 1);

    console.log(doctorSolicitado);

    const posicion = this.doctores.findIndex(doctor => doctor.id === doctorSolicitado.id);
    //filter filtramos datos de nuestra array pasando una condición si se cumple se añade al valor del resultado final (en este caso ramirez)
    const doctoresRamirez = this.doctores.filter(doctor=> doctor.apellidos === 'ramirez');

    // find: Encuentra el primer resultado que cumpla la condición (1 resultado)
    const  doctorIgnacio = this.doctores.find(doctor => doctor.nombre === 'Ignacio');

    //Shift : elimina y obtiene el primer elemento del array

   // Pop : elimina y obtiene el último elemento del array

   //object.keys(doctor): nos devuelve array string con las propiedades del objeto

    // Llamada de carta Doctor y lo recoge Panel de control (Comunicación hijo a padre)
    this._snackBar.open(
      `Se ha borrado el doctor ${doctorSolicitado.nombre}`
    );

    console.log('doctorSolicitado');
  }
  openDialog(doctorSolicitado: Doctor, Component: any) {
    this.dialog.open(Component, {
      data: {
        doctorSolicitado
      },
    });
  }
  procesaConsultaDoctor(doctorSolicitado: Doctor) {

    this.openDialog(doctorSolicitado, GestionaCitasComponent)

    // Llamada de carta Doctor y lo recoge Panel de control (Comunicación hijo a padre)
    this._snackBar.open(
      `Se ha solicitado cita con el doctor ${doctorSolicitado.nombre}`
    );

    console.log('doctorSolicitado');
  }
}

