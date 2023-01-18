import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Usuario } from '../interface/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUsuarios: string = 'usuarioapi'
  usuarioConectado: Usuario;
  constructor(private restservice: RestService, private spinner: NgxSpinnerService, private router : Router) {

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
  crearUsuario(usuario: Usuario) {
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

  loginUsuario(email: string, password: string) {
    /** spinner starts on init */
    this.spinner.show();

    return new Observable((observer) => {
      // Pasamos el loginApi que hemos creado para recuperar los datos en inicio sesión
      this.restservice.peticionHttp('loginapi', 'POST', { email, password }).subscribe(usuario => {
        if(usuario){
          this.usuarioConectado = usuario;

          localStorage.setItem('usuarioConectado', JSON.stringify(usuario))
        }
       


        observer.next(usuario);
        observer.complete();
        //Ocultamos el spinner
        this.spinner.hide();
      })
    });
  }
  // Hacemo tres metodos que se llamaen isDoctor, paciente, admin que recueperen la cookie del usuario conectado 
  //y devuelvan true si el rol es el correcto, para admindevolvera true si el rol es igual a 1

  isDoctor(): boolean {

    // De JSON lo pasamos a objeto . 

    const usuario = JSON.parse(localStorage.getItem('usuarioConectado'));

    if (usuario != null && usuario != undefined) {

      if (usuario.Rol == 2) {

        return true;
      } else {

        return false;
      }

    } else {

      return false;
    }


  }

  isPaciente(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuarioConectado'));

    if (usuario != null  && usuario != undefined){
      if(usuario.Rol == 3) {

        return true;
      } else {

        return false;
      }

    } else {

      return false;
    }


  }
    

  isAdmin(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuarioConectado'));

    if (usuario != null  && usuario != undefined){
      if(usuario.Rol == 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
    getUserConnected(){
      return JSON.parse(localStorage.getItem('usuarioConectado'));
    }

    cerrarSesion(){
      localStorage.clear()
      this.router.navigate(['usuario/login']);
    }

}
