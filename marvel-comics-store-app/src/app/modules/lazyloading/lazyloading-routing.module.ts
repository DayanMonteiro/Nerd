import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from 'src/app/pages/home/home.component';
// import { NavbarComponent } from 'src/app/components/template/navbar/navbar.component';
import { OfertasListaComponent } from 'src/app/components/ofertas/ofertas-lista/ofertas-lista.component';
// import { FooterComponent } from 'src/app/components/template/footer/footer.component';
import { SectionCardComponent } from 'src/app/components/section-card/section-card.component';
// import { HeroisService } from 'src/app/services/herois/herois.service';
// import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  declarations: [
   // NavbarComponent, 
   // FooterComponent, 
    HomeComponent, 
    OfertasListaComponent,
    SectionCardComponent 
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
