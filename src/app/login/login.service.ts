import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://10.171.80.125:3236/rest/smartlink/v1'

  constructor(private http: HttpClient) { }

  validateLogin(dados: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/user`, dados, httpOptions);
  }

}
