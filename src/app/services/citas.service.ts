import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Cita } from '../interface/Cita';
import { RestService } from './rest.service';
import { Doctor } from '../interface/Doctor';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  apiCitass: string = 'citaapi'
 
  constructor(private restservice: RestService, private spinner: NgxSpinnerService) { 
  }

  // Crear Cita.
  crearCita(cita: Cita): Observable<Cita> {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiCitass, 'POST', cita).subscribe(cita => {
        observer.next(cita);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  //Creación  y envio Observable
  recuperarCitas(doctor: Doctor): Observable<any[]> {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiCitass + '?id=' + doctor.id, 'GET').subscribe(citas => {
        observer.next(citas);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  //Creamos  funcion para que borre de la array la cita recibida
  borraCita(citaBorrada: Cita): Observable<void> {
    console.log(citaBorrada);
    /** spinner starts on init */
    this.spinner.show();
    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiCitass + '?id='+ citaBorrada.id, 'DELETE').subscribe(cita => {
        observer.next(cita);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  
  // Para actualizar la cita.
  acutalizoCita(citaActualiza: Cita){
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiCitass, 'PUT', citaActualiza).subscribe(cita => {
        observer.next(cita);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
}
