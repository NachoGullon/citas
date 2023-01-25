import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantalla-independiente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pantalla-independiente.component.html',
  styleUrls: ['./pantalla-independiente.component.scss']
})
// con el comando default indicamos que sólo exportamos este fichero
export default class PantallaIndependienteComponent {

}
