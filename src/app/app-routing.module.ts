import { NgModule, Component, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { AuthGuard } from './guards/auth.guard';
import { FormularioDoctorComponent } from './formulario-doctor/formulario-doctor.component';
import { VisitaFamiliarComponent } from './modules/familia/visita-familiar/visita-familiar.component';
import { UsuarioService } from './services/usuario.service';

const routes: Routes = [
  {
    path: 'control',
    component: PanelControlComponent,
    // Funtional Router Guard :En vez de usar ficheros Guard podemos invocar el servicio durante un momento y acceder al metodo que nos compruebe
    //lo que queremos. Angular 14.
    canActivate: [()=>inject(UsuarioService).isLoged()],
    title: 'Panel de Control',
  },

  {
    path: 'formularioDoctor',
    component: FormularioDoctorComponent,
    canActivate: [AuthGuard],
    title: 'Formulario Doctor',
  },
 
  // Enrutamos un modulo mediante el lazy Loading en este caso usuario module
  {path : 'usuario', loadChildren:()=> import('./modules/usuario/usuario.module').then(em=> em.UsuarioModule)},
  {path : 'familia', loadChildren:()=> import('./modules/familia/familia.module').then(em=> em.FamiliaModule)},
 // Enrutar componentes standalone
  {path: 'pantallaIndependiente', loadComponent:()=>import('./pantalla-independiente/pantalla-independiente.component')}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
