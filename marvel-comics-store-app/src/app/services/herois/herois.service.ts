import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { isInterfaceDeclaration } from 'typescript';

/* foi preciso declarar essas duas interfaces para construir o retorno do get da request */
interface Data {
  results: Array<any>
}

interface RequestResponse {
  data: Data
}

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

 /* marvelUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fec724da5a8ac11f692746467ad20d86&hash=8f7d4c3161aa079300daf876c3f7bcdb'; */

  marvelUrl = 'https://gateway.marvel.com:443/v1/public/comics';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<RequestResponse>(`${this.marvelUrl}`)
  }
}
