import { Component, OnInit } from '@angular/core';
import { HeroisService } from 'src/app/services/herois/herois.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class SectionCardComponent implements OnInit {
  herois: Array<any> = [];
  heroi = {
    titulo: '',
    descricao: '',
    imagem: '',
    preco: '',
  };
  constructor(
    private heroisService: HeroisService,
    private config: NgbModalConfig,
    private modalService: NgbModal
    ) { 
     /* this.config.backdrop = 'static'; */
      this.config.keyboard = false;
    }

  ngOnInit() { 
    this.listar();
  }

  listar() {
    this.heroisService
    .listar()
    .subscribe(dados => this.herois = dados.data.results);
  }

  open(content: any, obj: any) {
    this.modalService.open(content);
    this.heroi.titulo = obj.title;
    this.heroi.descricao = obj.description;
    this.heroi.imagem = obj.thumbnail.path;
    this.heroi.preco = obj.prices[0].price
  }

  openCompras(compras: any, obj: any) {
    this.modalService.open(compras);
    this.heroi.titulo = obj.title;
    this.heroi.descricao = obj.description;
    this.heroi.imagem = obj.thumbnail.path;
    this.heroi.preco = obj.prices[0].price
  }

}
