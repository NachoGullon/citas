import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliaRoutingModule } from './familia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';


import { FamiliarService } from '../../services/familiar.service';
import { CartaFamiliarComponent } from 'src/app/modules/familia/carta-familiar/carta-familiar.component';
import { VisitaFamiliarComponent } from './visita-familiar/visita-familiar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    VisitaFamiliarComponent,
    CartaFamiliarComponent,

  ],
  imports: [
    CommonModule,
    FamiliaRoutingModule,
   SharedModule,
  ],
  providers: [FamiliarService],
})
export class FamiliaModule { }
