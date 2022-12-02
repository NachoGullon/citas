import { Component, OnInit } from '@angular/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Doctor } from '../interface/Doctor';
import { DoctorService } from '../services/doctor.service';
import { SharedService } from '../services/shared.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SolicitaCitaComponent } from '../solicita-cita/solicita-cita.component';

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
    private sharedService : SharedService,
    private dialog: MatDialog
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

    this.openDialog(doctorSolicitado)

    // Llamada de carta Doctor y lo recoge Panel de control (Comunicación hijo a padre)
    this._snackBar.open(
      `Se ha solicitado cita con el doctor ${doctorSolicitado.nombre}`
    );

    console.log('doctorSolicitado');
  }
  openDialog(doctorSolicitado: Doctor) {
    this.dialog.open(SolicitaCitaComponent, {
      data: {
        doctorSolicitado
      },
    });
  }
}

