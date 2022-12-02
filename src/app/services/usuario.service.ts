import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Usuario } from '../interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUsuarios: string = 'usuarioapi'
  constructor(private restservice: RestService, private spinner: NgxSpinnerService) {

  }
  //Creación  y envio Observable
  recuperarUsuarios(): Observable<any[]> {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      this.restservice.peticionHttp(this.apiUsuarios, 'GET').subscribe(usuarios => {
        observer.next(usuarios);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });

  }

    //Creación  y envio Observable
    recuperarUsuarioId(id: number): Observable<any> {
      /** spinner starts on init */
      this.spinner.show();
  
      return new Observable((observer) => {
        this.restservice.peticionHttp(this.apiUsuarios + `?id=${id}`, 'GET').subscribe(usuario => {
          observer.next(usuario);
          observer.complete();
          //Ocultamos el spinner
          this.spinner.hide();
        })
      });
  
    }

    //Crear Usuario 
    crearUsuario(usuario: Usuario){
        /** spinner starts on init */
        this.spinner.show();
  
        return new Observable((observer) => {
          this.restservice.peticionHttp(this.apiUsuarios, 'POST', usuario).subscribe(usuario => {
            observer.next(usuario);
            observer.complete();
            //Ocultamos el spinner
            this.spinner.hide();
          })
        });
    }

    //Login

    loginUsuario(email: string, password: string){
      /** spinner starts on init */
      this.spinner.show();

      return new Observable((observer) => {
        // Pasamos el loginApi que hemos creado para recuperar los datos en inicio sesión
        this.restservice.peticionHttp('loginapi', 'POST', {email,password}).subscribe(usuario => {
          observer.next(usuario);
          observer.complete();
          //Ocultamos el spinner
          this.spinner.hide();
        })
      });
  }

}
