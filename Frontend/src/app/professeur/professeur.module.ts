import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [GestFichiersComponent],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    SharedModule
  ]
})
export class ProfesseurModule { }
