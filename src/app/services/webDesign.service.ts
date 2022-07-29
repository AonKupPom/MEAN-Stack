import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export class WebDesign {
  _id!: String;
  title!: String;
  description!: String;
  price!: Number;
  promotion!: String;
  page_amouth!: Number;
}

@Injectable({
  providedIn: 'root'
})
export class WebDesignService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  // Add
  addWebDesign(data: WebDesign): Observable<any> {
    return this.http.post(`https://aon-mean-backend.herokuapp.com/api/addWebDesign`, data);
  }

  // Get all WebDesign
  getWebDesigns() {
    return this.http.get(`https://aon-mean-backend.herokuapp.com/api/getWebDesigns`);
  }

  // Get WebDesign by id
  getWebDesign(id: any): Observable<any>{
    return this.http.get(`https://aon-mean-backend.herokuapp.com/api/getWebDesignById/${id}`, { headers: this.httpHeaders });
  }

  // Update WebDesign
  updateWebDesign(id: any, data: any): Observable<any>{
    return this.http.put(`https://aon-mean-backend.herokuapp.com/api/updateWebDesign/${id}`, data, { headers: this.httpHeaders });
  }

  // Delete WebDesign
  deleteWebDesign(id: any): Observable<any> {
    return this.http.delete(`https://aon-mean-backend.herokuapp.com/api/deleteWebDesign/${id}`, {headers: this.httpHeaders});
  }

}
