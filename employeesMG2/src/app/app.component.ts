import { Component } from '@angular/core';
import { InforPaginaService } from './services/infor-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _infoPaginaService: InforPaginaService ) {

  }
}
