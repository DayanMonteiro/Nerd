import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasListaComponent } from './ofertas-lista/ofertas-lista.component';

const routes: Routes = [
  {path: '', component: OfertasListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
