import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {
  info: Infopagina={};
  cargada=false;
  constructor(private http: HttpClient) {
  this.http.get('assets/data/data-pagina.json')
    
   }
}
