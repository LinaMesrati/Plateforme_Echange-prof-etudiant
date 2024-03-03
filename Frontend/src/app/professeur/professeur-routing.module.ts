import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';

const routes: Routes = [
  {path:"",component:GestFichiersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
