import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class User {
  _id!: String;
  email!: String;
  password!: String;
  title!: String;
  firstname!: String;
  lastname!: String;
  address!: String;
  brithDate!: Date;
  gender!: String;
  role!: String;
  tel!: String;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Node/Express API
  REST_API: string = `${location.origin}/api`;
  // Http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // HandleError
  handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      // Handle client error
      errorMessage = error.error.message;
    }
    else {
      // Handle server error
      errorMessage = `Error code : ${error.status}\nMessage : ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }

  // Get all user
  getUsers() {
    return this.http.get(`${location.origin}/api/getUsers`);
  }

  // Get user by id
  getUser(id: any): Observable<any>{
    return this.http.get(`${location.origin}/api/getUserById/${id}`, { headers: this.httpHeaders }).pipe(map((res) => {
      return res || {}
    }),
    catchError(this.handleError)
    );
  }

  // Update user
  updateUser(id: any, data: any): Observable<any>{
    return this.http.put(`${location.origin}/api/updateUser/${id}`, data, { headers: this.httpHeaders }).pipe(catchError(this.handleError));
  }

  // Delete Book
  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${location.origin}/api/deleteUser/${id}`, {headers: this.httpHeaders}).pipe(catchError(this.handleError));
  }

  updateProfile_picture(id: any, profile_picture) {
    const formData = new FormData();
    formData.append('profile_picture', profile_picture == null ? null : profile_picture[0]);
    return this.http.put<any>(`${location.origin}/api/updateProfile_picture/${id}`, formData).pipe(catchError(this.handleError));
  }

}
