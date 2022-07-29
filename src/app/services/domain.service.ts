import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export class Domain {
  _id!: String;
  title!: String;
  description!: String;
  price!: Number;
  promotion!: String;
  space!: Number;
  bandwidth!: Number;
  domain_amouth!: Number;
  email_amouth!: Number;
  database_amouth!: Number;
}

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  // Add
  addDomain(data: Domain): Observable<any> {
    return this.http.post(`https://aon-mean-backend.herokuapp.com/api/addDomain`, data);
  }

  // Get all Domain
  getDomains() {
    return this.http.get(`https://aon-mean-backend.herokuapp.com/api/getDomains`);
  }

  // Get Domain by id
  getDomain(id: any): Observable<any>{
    return this.http.get(`https://aon-mean-backend.herokuapp.com/api/getDomainById/${id}`, { headers: this.httpHeaders });
  }

  // Update Domain
  updateDomain(id: any, data: any): Observable<any>{
    return this.http.put(`https://aon-mean-backend.herokuapp.com/api/updateDomain/${id}`, data, { headers: this.httpHeaders });
  }

  // Delete Domain
  deleteDomain(id: any): Observable<any> {
    return this.http.delete(`https://aon-mean-backend.herokuapp.com/api/deleteDomain/${id}`, {headers: this.httpHeaders});
  }

}
