import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CitasService } from '../../../services/citas.service';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent implements OnInit {
  // Recibe información @Input 
  @Input() datos: any [];
  @Input() columnas: string [];
  @Input() modelo: string [];
  @Input() acciones: boolean;
  @Output() eliminar : EventEmitter <any> = new EventEmitter();
  @Output() editar : EventEmitter <any> = new EventEmitter();

   
   
  constructor() { }

  ngOnInit(): void {
    console.log(this.columnas);
    console.log(this.datos);
    console.log(this.modelo);
  }

   // Llamamos a borrar
   eliminarElemento(elemento: any){
    this.eliminar.emit(elemento)
    };

  
  //Llamamos a Editar cita
  editarElemento(elemento : any){
   this.editar.emit(elemento)
  };
}



