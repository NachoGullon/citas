import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitasService } from '../services/citas.service';
import { Doctor } from '../interface/Doctor';
import { Cita } from '../interface/Cita';

@Component({
  selector: 'app-gestiona-citas',
  templateUrl: './gestiona-citas.component.html',
  styleUrls: ['./gestiona-citas.component.scss']
})
export class GestionaCitasComponent implements OnInit {
 doctorAConsultar: Doctor;
 citas : Cita[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef : MatDialogRef<GestionaCitasComponent>, private citasService : CitasService, private matSnackBar: MatSnackBar) { 
    this.doctorAConsultar= data.doctorSolicitado
  }

  ngOnInit(): void {
    console.log (this.doctorAConsultar);
    this.citasService.recuperarCitas(this.doctorAConsultar).subscribe(citas =>{
      this.citas= citas;
      console.log (citas);

    });

  }

  cancelar(){
    this.dialogRef.close()
  }

  aceptar (){
    this.dialogRef.close()

  }

  eliminarCita(eliminarCita: Cita){
    this.citasService.borraCita(eliminarCita).subscribe(()=>{
      this.citasService.recuperarCitas(this.doctorAConsultar).subscribe(citas =>{
        this.citas= citas;
        console.log (citas);
  
      });
    })

  }

  editarCita(editarCita: Cita){
    this.citasService.acutalizoCita(editarCita)
  }

}
