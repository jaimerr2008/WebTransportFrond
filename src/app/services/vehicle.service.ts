import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { VehicleModel } from '../models/vehicles.models';
 

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

getVehicle(id,token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Vehicle/'+id,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
}
getVehicles(token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Vehicle', {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
register(Vehicle: VehicleModel, token:string): Observable<any> {
    let json = JSON.stringify(Vehicle);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/Vehicle', params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
  update(Vehicle: VehicleModel, token:string): Observable<any> {
    let json = JSON.stringify(Vehicle);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + '/Vehicle/'+Vehicle.id, params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  delete(Vehicle: VehicleModel, token:string): Observable<any> {
    let json = JSON.stringify(Vehicle);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + '/Vehicle/'+Vehicle.id, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  
}
