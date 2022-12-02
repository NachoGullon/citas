import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitaFamiliarComponent } from './visita-familiar/visita-familiar.component';

const routes: Routes = [
  {
    path: 'visitaFamiliar',
    component: VisitaFamiliarComponent,
    title: ' Visita Familiar',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamiliaRoutingModule { }
