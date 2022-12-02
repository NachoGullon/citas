import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctor } from '../interface/Doctor';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-doctor',
  templateUrl: './carta-doctor.component.html',
  styleUrls: ['./carta-doctor.component.scss']
})
export class CartaDoctorComponent implements OnInit {

   // Recibe información @Input este caso de panel
   @Input()doctor : Doctor;
   //Evento de salida
   @Output()citaSolicitada : EventEmitter < void > = new EventEmitter();
 
   @Input() modoLectura : boolean = false;

  constructor(private doctorService: DoctorService, private router : Router) { }
 
  
  
 

  ngOnInit(): void {
  }
  solicitaCita(){
    this.citaSolicitada.emit();
  }
  // Llamamos a borrar
  borrarDoctor(){
    this.doctorService.borraDoctor(this.doctor).subscribe();

  }
  //Llamamos a Editar doctor
  editarDoctor(){
    this.doctorService.doctorEditado = this.doctor;
    //redirigir la persona al form.
    this.router.navigate(['formularioDoctor']);
  }
}
