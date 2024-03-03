import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacePublicComponent } from './espace-public/espace-public.component';

const routes: Routes = [
  {path:"",component:EspacePublicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
