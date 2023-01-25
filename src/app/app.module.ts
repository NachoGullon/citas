import { DoctorService } from './services/doctor.service';
import { FamiliarService } from './services/familiar.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PanelControlComponent } from './panel-control/panel-control.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CartaDoctorComponent } from './carta-doctor/carta-doctor.component';
import { FormularioDoctorComponent } from './formulario-doctor/formulario-doctor.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SolicitaCitaComponent } from './solicita-cita/solicita-cita.component';
import { GestionaCitasComponent } from './gestiona-citas/gestiona-citas.component';
import { CartaIndependienteComponent } from './carta-independiente/carta-independiente.component';

@NgModule({
  declarations: [
    AppComponent,

    PanelControlComponent,

    CartaDoctorComponent,
    FormularioDoctorComponent,
    SolicitaCitaComponent,
    GestionaCitasComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   SharedModule,
    NgxSpinnerModule,
    HttpClientModule,
    CartaIndependienteComponent
  ],
  providers: [DoctorService, FamiliarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
