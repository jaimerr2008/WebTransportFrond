import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  singup(user): Observable<any> {
 
    let json = JSON.stringify(user);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/User', params, { headers: header } )
}

  register(areas): Observable<any> {
    let json = JSON.stringify(areas);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/register', params, {headers: header} );
  }

}
