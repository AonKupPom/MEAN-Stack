import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export class Server {
  _id!: String;
  title!: String;
  description!: String;
  price!: Number;
  promotion!: String;
  space!: Number;
  bandwidth!: Number;
  server_amouth!: Number;
  server_type!: String;
  operating_system!: String;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  // Add
  addServer(data: Server): Observable<any> {
    return this.http.post(`${location.origin}/api/addServer`, data);
  }

  // Get all Server
  getServers() {
    return this.http.get(`${location.origin}/api/getServers`);
  }

  // Get Server by id
  getServer(id: any): Observable<any>{
    return this.http.get(`${location.origin}/api/getServerById/${id}`, { headers: this.httpHeaders });
  }

  // Update Server
  updateServer(id: any, data: any): Observable<any>{
    return this.http.put(`${location.origin}/api/updateServer/${id}`, data, { headers: this.httpHeaders });
  }

  // Delete Server
  deleteServer(id: any): Observable<any> {
    return this.http.delete(`${location.origin}/api/deleteServer/${id}`, {headers: this.httpHeaders});
  }

}
