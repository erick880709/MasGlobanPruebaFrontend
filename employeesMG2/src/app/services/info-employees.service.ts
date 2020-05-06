import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoEmployeesService {
  apiURL="https://localhost:44336/api/";
  httpOptions={
    "header":new HttpHeaders({
      'Content-Type':'aplication/json'
    })
  }

  constructor(private http: HttpClient) {

   }
   private extractData (res:Response){
     let body=res;
     return body||{};
   }
   GetEmployees(cedula:number,indicador: number): Observable<any>{
     let requestUrl = this.apiURL + 'employees/GetEmployees';
     let params = new HttpParams()
     .set("cedula" , '0')
     .set ("indicador" , '0');
     let response = this.http.get(requestUrl,{params:params,headers:this.httpOptions.header}).pipe(map(this.extractData));
     return response;
   }
}
