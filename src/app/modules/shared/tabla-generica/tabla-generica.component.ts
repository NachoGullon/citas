import { Component, Input, OnInit } from '@angular/core';

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

   
   
  constructor() { }

  ngOnInit(): void {
    console.log(this.columnas);
    console.log(this.datos);
    console.log(this.modelo);
  }

}
