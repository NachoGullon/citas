import { CitasService } from './../services/citas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '../interface/Doctor';
import { Cita } from '../interface/Cita';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solicita-cita',
  templateUrl: './solicita-cita.component.html',
  styleUrls: ['./solicita-cita.component.scss']
})
export class SolicitaCitaComponent implements OnInit {

  formularioCita : FormGroup;
  doctor : Doctor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef : MatDialogRef<SolicitaCitaComponent>, private citasService : CitasService, private matSnackBar: MatSnackBar) { 
    this.doctor = data.doctorSolicitado;

    console.log (this.doctor);
  }

  ngOnInit(): void {
    this.formularioCita = new FormGroup({
      fecha: new FormControl(null,[Validators.required]),
      motivo: new FormControl(null,[Validators.required])
    });
  }

  aceptar(){
    const fecha : Date = this.formularioCita.value.fecha

    const motivo : string = this.formularioCita.value.motivo

    const cita : Cita = {
      idDoctor: this.doctor.id,
      idPaciente: 1,
      fecha: fecha.toISOString(),
      motivo: motivo
      
    }
    this.citasService.crearCita(cita).subscribe(()=>{
      this.matSnackBar.open('Cita colicitada correctamente');
      this.dialogRef.close();
    })
  
  }



  cancelar(){
    this.dialogRef.close()
  }

}
