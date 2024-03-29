import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export class Cloud {
  _id!: String;
  title!: String;
  description!: String;
  price!: Number;
  promotion!: String;
  space!: Number;
}

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  // Add
  addCloud(data: Cloud): Observable<any> {
    return this.http.post(`${location.origin}/api/addCloud`, data);
  }

  // Get all Cloud
  getClouds() {
    return this.http.get(`${location.origin}/api/getClouds`);
  }

  // Get Cloud by id
  getCloud(id: any): Observable<any>{
    return this.http.get(`${location.origin}/api/getCloudById/${id}`, { headers: this.httpHeaders });
  }

  // Update Cloud
  updateCloud(id: any, data: any): Observable<any>{
    return this.http.put(`${location.origin}/api/updateCloud/${id}`, data, { headers: this.httpHeaders });
  }

  // Delete Cloud
  deleteCloud(id: any): Observable<any> {
    return this.http.delete(`${location.origin}/api/deleteCloud/${id}`, {headers: this.httpHeaders});
  }

}
