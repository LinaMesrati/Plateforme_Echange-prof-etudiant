import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [GestFichiersComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    SharedModule
  ]
})
export class EtudiantModule { }
