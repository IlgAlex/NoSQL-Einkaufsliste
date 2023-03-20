import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  basePath = 'http://localhost:8070/api/app';

  constructor(private http: HttpClient) { }

  getElements(cb: (data: any) => void) {
    return this.http.get(`${this.basePath}/elements`, {withCredentials: true}).subscribe(
      (data) => {
      cb(data);
    },
    (error: HttpErrorResponse) => {
      console.error('Error: ', error.status, ' ', error.statusText);
      cb(error);
    }
    );
  }

  createElement(name: string, collection: string, cb: (data: any) => void) {
    const params = new HttpParams()
      .set('collection', collection)
      .set('name', name);

    return this.http.post(`${this.basePath}/elements`, params, {withCredentials: true}).subscribe(
      (data) => {
      cb(data);
    },
    (error: HttpErrorResponse) => {
      console.error('Error: ', error.status, ' ', error.statusText);
      cb(error);
    }
    );
  }

}
