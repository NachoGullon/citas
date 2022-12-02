import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Cita } from '../interface/Cita';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  apiCitass: string = 'citaapi'
  constructor(private restservice: RestService,private spinner: NgxSpinnerService) { }

   // Crear Cita.
   crearCita(cita: Cita): Observable<Cita>{
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
}
