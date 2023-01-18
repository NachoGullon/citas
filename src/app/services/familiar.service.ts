import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familiar } from '../interface/Familiar';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FamiliarService {
  nombreFamiliar: string = 'Manolo';
  familiaresBBDD: Familiar[] = [];
  familiarEditado: Familiar;

  apiFamiliares: string = 'familiarapi'
  constructor(private restservice: RestService,private spinner: NgxSpinnerService) {
    const familiar1 = {
      nombre: 'Alonso',
      paciente: 'Belén',
      hospital: 'La paz',
      email: 'alonso@email.com'
    };
    const familiar2 = {
      nombre: 'Alonso',
      paciente: 'Belén',
      hospital: 'La paz',
      email: 'alonso@email.com'
    };
    const familiar3 = {
      nombre: 'Alonso',
      paciente: 'Belén',
      hospital: 'La paz',
      email: 'alonso@email.com'
    };
    this.familiaresBBDD = [familiar1, familiar2];
    this.familiaresBBDD.push(familiar3);
    //Recuperamos cookie
    const cookieFamiliares: string = localStorage.getItem('cookieFamiliares');
    //preguntamos si esciste
    if (cookieFamiliares) {
      //Si existe hacemos que la BBDD sea el valor de la galleta
      this.familiaresBBDD = JSON.parse(cookieFamiliares);
      //Sino existia
    } else {
      //creamos galleta con valores de fabrica
      localStorage.setItem(
        'cookieFamiliares',
        JSON.stringify(this.familiaresBBDD)
      );
    }
  }

  //Creación  y envio Observable
  recuperarFamiliar(): Observable<any[]> {
    /** spinner starts on init */
    this.spinner.show();

   return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiFamiliares, 'GET').subscribe(familiares => {
        observer.next(familiares);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  crearFamiliar(familiarCreado: Familiar): Observable<Familiar> {
     /** spinner starts on init */
     this.spinner.show();

     return new Observable((observer) => {
       this.restservice.peticionHttp(this.apiFamiliares, 'POST', familiarCreado).subscribe(familiar => {
         observer.next(familiar);
         observer.complete();
         //Ocultamos el spinner
         this.spinner.hide();
       })
     });
  }

 //Creamos  funcion para que borre de la array el doctor recibido
 borraFamiliar(familiarBorrado: Familiar): Observable<void> {
  /** spinner starts on init */
  this.spinner.show();

  return new Observable((observer) => {
    this.restservice.peticionHttp(this.apiFamiliares + '?id='+ familiarBorrado.id, 'DELETE').subscribe(familiar => {
      observer.next(familiar);
      observer.complete();
      //Ocultamos el spinner
      this.spinner.hide();
    })
  });
}
//Va actualizar y sincronizar la cookie
sincronizaCookie() {
  localStorage.setItem('cookieFamiliares', JSON.stringify(this.familiaresBBDD));
}
  // Para actualizar familiar.
  acutalizoFamiliar(familiarActualiza: Familiar) {
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiFamiliares, 'PUT', familiarActualiza).subscribe(familiar => {
        observer.next(familiar);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
}
