import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { AuthGuard } from './guards/auth.guard';
import { FormularioDoctorComponent } from './formulario-doctor/formulario-doctor.component';
import { VisitaFamiliarComponent } from './modules/familia/visita-familiar/visita-familiar.component';

const routes: Routes = [
  {
    path: 'control',
    component: PanelControlComponent,
    canActivate: [AuthGuard],
    title: 'Panel de Control',
  },

  {
    path: 'formularioDoctor',
    component: FormularioDoctorComponent,
    title: 'Formulario Doctor',
  },
 
  // Enrutamos un modulo mediante el lazy Loading en este caso usuario module
  {path : 'usuario', loadChildren:()=> import('./modules/usuario/usuario.module').then(em=> em.UsuarioModule)},
  {path : 'familia', loadChildren:()=> import('./modules/familia/familia.module').then(em=> em.FamiliaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
