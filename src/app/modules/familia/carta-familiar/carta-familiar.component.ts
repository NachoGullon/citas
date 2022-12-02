import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Familiar } from '../../../interface/Familiar';
import { FamiliarService } from '../../../services/familiar.service';


@Component({
  selector: 'app-carta-familiar',
  templateUrl: './carta-familiar.component.html',
  styleUrls: ['./carta-familiar.component.scss']
})
export class CartaFamiliarComponent implements OnInit {

  constructor(private familiarService: FamiliarService, private router : Router) { }
   // Recibe información @Input este caso de panel
   @Input() familiar : Familiar;

  //Evento de salida
  @Output()visitaSolicitada : EventEmitter < void > = new EventEmitter();

  @Input() modoLectura : boolean = false;

  ngOnInit(): void {
  }
  solicitaVisita(){
    this.visitaSolicitada.emit();
}
  // Llamamos a borrar
  borrarFamiliar(){
    this.familiarService.borraFamiliar(this.familiar).subscribe();

  }
  //Llamamos a Editar familiar
  editarFamiliar(){
    this.familiarService.familiarEditado = this.familiar;
    //redirigir la persona al form.
    this.router.navigate(['visitaFamiliar']);
  }
}
