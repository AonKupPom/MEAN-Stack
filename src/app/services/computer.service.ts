import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';


export class Computer {
  _id!: String;
  name!: String;
  price!: String;
  model!: String;
  specification!: String;
  image!: String;
  description!: String;
  type!: String;
}

@Injectable({
  providedIn: 'root'
})

export class ComputerService {

  // Http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // HandleError
  handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
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

  // Add
  addComputer(data, image) {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('model', data.model);
    formData.append('specification', data.specification);
    formData.append('image', image == null ? null : image[0]);
    formData.append('description', data.description);
    formData.append('type', data.type);
    return this.http.post<any>(`https://mean-stack-aon.herokuapp.com/api/addComputer`, formData).pipe(catchError(this.handleError));
  }

  // Get all Computer
  getComputers() {
    return this.http.get(`https://mean-stack-aon.herokuapp.com/api/getComputers`);
  }

  // Get Computer by id
  getComputer(id: any): Observable<any> {
    return this.http.get(`https://mean-stack-aon.herokuapp.com/api/getComputerById/${id}`, { headers: this.httpHeaders }).pipe(map((res) => {
      return res || {}
    }),
      catchError(this.handleError)
    );
  }

  // Update Computer
  updateComputer(id: any, data: any, image) {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('model', data.model);
    formData.append('specification', data.specification);
    formData.append('image', image == null ? null : image[0]);
    formData.append('description', data.description);
    formData.append('type', data.type);
    return this.http.put<any>(`https://mean-stack-aon.herokuapp.com/api/updateComputer/${id}`, formData).pipe(catchError(this.handleError));
  }

  // Delete Computer
  deleteComputer(id: any): Observable<any> {
    return this.http.delete(`https://mean-stack-aon.herokuapp.com/api/deleteComputer/${id}`, { headers: this.httpHeaders }).pipe(catchError(this.handleError));
  }

}
