import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { DriverModel } from '../models/driver.models';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

getDriver(id,token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Driver/'+id,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
}
getDrivers(token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Driver', {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
register(driver: DriverModel, token:string): Observable<any> {
    let json = JSON.stringify(driver);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/Driver', params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
  update(driver: DriverModel, token:string): Observable<any> {
    let json = JSON.stringify(driver);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + '/Driver/'+driver.id, params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  delete(driver: DriverModel, token:string): Observable<any> {
    let json = JSON.stringify(driver);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + '/Driver/'+driver.id, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  
}
