import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeroisService } from './services/herois/herois.service';
import { HttpClientModule,  } from '@angular/common/http';
import { routing } from './app.routing';
import { InterceptorModule } from './interceptor/interceptor.module';
import { OfertasListaComponent } from './components/ofertas/ofertas-lista/ofertas-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    SectionCardComponent,
    OfertasListaComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    FormularioComponent
  ],
  
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    routing,
    InterceptorModule
  ],
  providers: [ HeroisService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
