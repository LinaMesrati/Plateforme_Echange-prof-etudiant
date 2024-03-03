import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { EspacePublicComponent } from './espace-public/espace-public.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [EspacePublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
