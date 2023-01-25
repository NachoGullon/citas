import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin : FormGroup;

  constructor(private _snackBar: MatSnackBar,private router:Router, private sharedService:SharedService, private usuarioService: UsuarioService) {
    // Añadimos titulo de nuestro shared
    this.sharedService.tituloWeb.next('Inicio Sesión');

  }

  ngOnInit(): void {
    this.formularioLogin= new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(3)])
    })
  }
  recogeFormulario(){
    console.log ("Hola");
    console.log (this.formularioLogin);

    if(this.formularioLogin.valid){
      const miEmail: string = this.formularioLogin.get('email').value;
      const miPassword: string = this.formularioLogin.value.password;
      console.log (miEmail+"--"+miPassword);

      this.usuarioService.loginUsuario(miEmail,miPassword).subscribe(usuario=>{
        if(usuario){
           // Logica de inicio sesión 
        this._snackBar.open('Datos correctos','cerrado');
      
        this.router.navigate(['control']);
        }else{
          this._snackBar.open('Datos incorrectos', 'cerrado');
        }
      })
        
    }
    
  }

}
