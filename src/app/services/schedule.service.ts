import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { ScheduleModel } from '../models/schedule.models';
 

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

getSchedule(id,token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Schedule/'+id,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
}
getSchedules(token): Observable<any> {    
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/Schedule', {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
register(Schedule: ScheduleModel, token:string): Observable<any> {
    let json = JSON.stringify(Schedule);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/Schedule', params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} );
  }
  update(Schedule: ScheduleModel, token:string): Observable<any> {
    let json = JSON.stringify(Schedule);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + '/Schedule/'+Schedule.id, params, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  delete(Schedule: ScheduleModel, token:string): Observable<any> {
    let json = JSON.stringify(Schedule);
    let params =  json;
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + '/Schedule/'+Schedule.id, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer `+ token,
    })} 
    );
  }
  
}
