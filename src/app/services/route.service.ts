import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { RouteModel } from '../models/route.models';
 

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

getRoute(id,token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Route/'+id,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
}
getRoutes(token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Route', {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
register(Route: RouteModel, token:string): Observable<any> {
    let json = JSON.stringify(Route);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/Route', params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
  update(Route: RouteModel, token:string): Observable<any> {
    let json = JSON.stringify(Route);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + '/Route/'+Route.id, params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  delete(Route: RouteModel, token:string): Observable<any> {
    let json = JSON.stringify(Route);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + '/Route/'+Route.id, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  
}
