import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Doctor } from '../interface/Doctor';
import { DoctorService } from '../services/doctor.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-carta-independiente',
  // el atributo standalone hace que un compoenente o pipe o directiva sea totalmente independiente, es decir no tenga que ser puesta en ningún declaration de los modulos
  // funciona de la siguiente manera: parte de cero, se le va especificando exactamente lo que qnecesita
  //para luego poder utilizar este comp se puede importar en otros comp standalone o en mpodulos normales mediante el array de imports.
  standalone: true,
  imports: [NgIf,MatCardModule],
  providers:[DoctorService, UsuarioService],
  templateUrl: './carta-independiente.component.html',
  styleUrls: ['./carta-independiente.component.scss']
})
export class CartaIndependienteComponent implements OnInit {

  // Recibe información @Input este caso de panel
  @Input()doctor : Doctor;
  //Evento de salida
  @Output()citaSolicitada : EventEmitter < void > = new EventEmitter();
  @Output() doctorBorrado : EventEmitter <void> = new EventEmitter();
  @Output()consultaSolicitada : EventEmitter < void > = new EventEmitter();
  @Input() modoLectura : boolean = false;

  // Inject: Inyectar clases. Normalemnte usado por las clsases de angular o services
  permisoEdicion : boolean = false;
  doctorService: DoctorService = inject(DoctorService);
  router : Router = inject(Router);
  usuarioService : UsuarioService = inject(UsuarioService);

 ngOnInit(): void {
 
   console.log(this.usuarioService.isAdmin());
   console.log(this.usuarioService.isDoctor());
   console.log(this.doctor.id);
   // Hacemos las comprobaciones: Sólo el admin y un doctro pueden editar, el doctor en caso de que sea el mismo === id
   if(this.usuarioService.isAdmin() || this.usuarioService.isDoctor() ){
     if(this.usuarioService.isAdmin())this.permisoEdicion == true
   else this.permisoEdicion = this.usuarioService.getUserConnected().id == this.doctor.id;
  
   }
 }
 
 solicitaCita(){
   this.citaSolicitada.emit();
 }
 // Llamamos a borrar
 borrarDoctor(){
   this.doctorService.borraDoctor(this.doctor).subscribe(()=>{
     this.doctorBorrado.emit();
   });

 }
 //Llamamos a Editar doctor
 editarDoctor(){
   this.doctorService.doctorEditado = this.doctor;
   //redirigir la persona al form.
   this.router.navigate(['formularioDoctor']);
 }
 consultaCita(){
   this.consultaSolicitada.emit();
 }
 

}
