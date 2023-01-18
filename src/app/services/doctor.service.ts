import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Doctor } from '../interface/Doctor';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  nombreDoctor: string = 'Manolo';
  doctoresBBDD: Doctor[] = [];
  doctorEditado: Doctor;

  apiDoctores: string = 'doctorapi'
  constructor(private restservice: RestService,private spinner: NgxSpinnerService) {
    const doctor1 = {
      nombre: 'Mariano',
      apellidos: 'Perez',
      especialidad: 'Familia',
      turno: 'Mañana',
      hospital: 'La Paz',
    };
    const doctor2 = {
      nombre: 'Ana',
      apellidos: 'Fernandez',
      especialidad: 'Pediatra',
      turno: 'Tarde',
      hospital: 'La Paz',
    };
    const doctor3 = {
      nombre: 'Luis',
      apellidos: 'Gil',
      especialidad: 'Especialista',
      turno: 'Tarde',
      hospital: 'La Paz',
    };
    this.doctoresBBDD = [doctor1, doctor2];
    this.doctoresBBDD.push(doctor3);
    //Recuperamos cookie
    const cookieDoctores: string = localStorage.getItem('cookieDoctores');
    //preguntamos si existe
    if (cookieDoctores) {
      //Si existe hacemos que la BBDD sea el valor de la galleta
      this.doctoresBBDD = JSON.parse(cookieDoctores);
      //Sino exitia
    } else {
      //creamos galleta con valores de fabrica
      localStorage.setItem('cookieDoctores', JSON.stringify(this.doctoresBBDD));
    }
  }

  //Creación  y envio Observable
  recuperarDoctores(): Observable<any[]> {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiDoctores, 'GET').subscribe(doctores => {
        observer.next(doctores);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });

  }
  // Crear Doctor.
  crearDoctor(doctor: Doctor): Observable<Doctor>{
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiDoctores, 'POST', doctor).subscribe(doctor => {
        observer.next(doctor);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }

  //Creamos  funcion para que borre de la array el doctor recibido
  borraDoctor(doctorBorrado: Doctor): Observable<void> {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiDoctores + '?id='+ doctorBorrado.id, 'DELETE').subscribe(doctor => {
        observer.next(doctor);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  //Va actualizar y sincronizar la cookie
  sincronizaCookie() {
    localStorage.setItem('cookieDoctores', JSON.stringify(this.doctoresBBDD));
  }
// Para actualizar doctor.
  acutalizoDoctor(doctorActualiza: Doctor){
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiDoctores, 'PUT', doctorActualiza).subscribe(doctor => {
        observer.next(doctor);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });

  }
}
