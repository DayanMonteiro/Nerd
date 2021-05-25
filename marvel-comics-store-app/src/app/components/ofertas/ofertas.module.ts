import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasListaComponent } from './ofertas-lista/ofertas-lista.component';


@NgModule({
  declarations: [
    OfertasListaComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    
  ]
})
export class OfertasModule { }
