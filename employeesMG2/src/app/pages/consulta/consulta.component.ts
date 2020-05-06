import { Component, OnInit } from '@angular/core';
import { InfoEmployeesService } from '../../services/info-employees.service';
import { isNull } from 'util';

export interface Info {
    identificacion: any;
    nombre: any;
    apellido: any;
    celular: any;
    tipoContrato: any;
    salary_Contrato: any;
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  indicar: number ;
  // tslint:disable-next-line: variable-name
  constructor(private _servicioEmployees: InfoEmployeesService) { }
  datos: Info [] = [];
  identificacion: any;
  nombre: any;
  apellido: any;
  celular: any;
  tipoContrato: any;
  salaryContrato: any;
  ngOnInit() {
  }
  getDatos(cedula: number) {
    if (cedula) {
      this.indicar = 1;
    } else {
      this.indicar = 0;
    }
    this._servicioEmployees.GetEmployees(cedula, this.indicar).subscribe((temp) => {
      console.log(temp);
      this.datos = temp.Info;
      this.identificacion = temp.Identificacion;
      this.nombre = temp.Nombre;
      this.apellido = temp.Apellido;
      this.celular = temp.Celular;
      this.tipoContrato = temp.TipoContrato;
      this.salaryContrato = temp.SalaryContract;
    });
  }

}
