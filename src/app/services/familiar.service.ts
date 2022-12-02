import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familiar } from '../interface/Familiar';

@Injectable({
  providedIn: 'root'
})
export class FamiliarService {
  nombreFamiliar: string = 'Manolo';
  familiaresBBDD: Familiar[] = [];
  familiarEditado: Familiar;

  constructor() {
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
      //Si existe hacemos que la BBDD sea el valo de la galleta
      this.familiaresBBDD = JSON.parse(cookieFamiliares);
      //Sino exitia
    } else {
      //creamos galleta con valores de fabrica
      localStorage.setItem(
        'cookieFamiliares',
        JSON.stringify(this.familiaresBBDD)
      );
    }
  }

  //Creación  y envio Observable
  recuperarDoctores(): Observable<Familiar[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.familiaresBBDD);
        observer.complete();
      }, 3000);
    });
  }
  creaFamiliar(familiarCreado: Familiar): Observable<Familiar> {
    return new Observable((observer) => {
      setTimeout(() => {
        this.familiaresBBDD.push(familiarCreado);
        this.sincronizaCookie();
        observer.next(familiarCreado);
        observer.complete();
      }, 3000);
    });
  }

  //Creamos  funcion para que borre de la array el familiar recibido
  borraFamiliar(familiarBorrado: Familiar): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        //indexOf Nos devuelve la posición del array que queremos

        const posicionFamiliar: number =
          this.familiaresBBDD.indexOf(familiarBorrado);
        this.familiaresBBDD.splice(posicionFamiliar, 1);
        this.sincronizaCookie();
        observer.next(null);
        observer.complete();
      }, 3000);
    });
  }
  //Va actualizar y sincronizar la cookie
  sincronizaCookie() {
    localStorage.setItem('cookieFamiliares', JSON.stringify(this.familiaresBBDD));
  }
  // Para actualizar familiar.
  acutalizoFamiliar(familiarActualiza: Familiar) {}
}
