import { Component } from '@angular/core';
import { DoctorService } from './services/doctor.service';
import { SharedService } from './services/shared.service';
import { UsuarioService } from './services/usuario.service';
import { Usuario } from './interface/Usuario';
import { Doctor } from './interface/Doctor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tituloBarra : string;
  constructor (private doctorService: DoctorService,private sharedService: SharedService, private usuarioService: UsuarioService){
   this.usuarioService.recuperarUsuarioId(2).subscribe(usuarios =>{
    console.log(usuarios);
   })
   
    this.sharedService.tituloWeb.subscribe(nuevoTitulo => {
      this.tituloBarra = nuevoTitulo;

    })
    
    
  }
}
