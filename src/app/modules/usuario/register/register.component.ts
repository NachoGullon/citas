import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister : FormGroup;
  constructor(private _snackBar: MatSnackBar,private router:Router, private sharedService: SharedService, private usuarioService: UsuarioService) {
      // Añadimos titulo de nuestro shared
      this.sharedService.tituloWeb.next('Registro');
  }
  

  ngOnInit(): void {
    this.formRegister= new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password2: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      rol: new FormControl(null,[Validators.required])
    });
  }
  recogeFormulario(){
    console.log ("Hola");
    console.log (this.formRegister);

    if(this.formRegister.valid){
      const miName: string = this.formRegister.get('name').value;
      const miEmail: string = this.formRegister.get('email').value;
      const miPassword: string = this.formRegister.value.password;
      const miPassword2: string = this.formRegister.value.password2;
      const miRol: string = this.formRegister.value.rol;
      console.log (miEmail+"--"+miPassword+"--"+miPassword2);
      
      const usuario: Usuario = {
        nombre: miName,
        email: miEmail,
        password: miPassword,
        password2:miPassword2,
        rol: miRol
    
       }
       this.usuarioService.crearUsuario(usuario).subscribe(usuarioBBDD =>{
        console.log(usuarioBBDD);
       })
  
    }
    
  }
  }


