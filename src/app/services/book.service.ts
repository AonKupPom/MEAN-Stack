import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Book {
  _id!: String;
  name!: String;
  price!: String;
  description!: String;
  type!: String;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

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
    return throwError(errorMessage)
  }

  // Add
  addBook(data: Book): Observable<any> {
    return this.http.post(`https://mean-stack-aon.herokuapp.com/api/addBook`, data).pipe(catchError(this.handleError));
  }

  // Get all book
  getBooks() {
    return this.http.get(`https://mean-stack-aon.herokuapp.com/api/getBooks`);
  }

  // Get book by id
  getBook(id: any): Observable<any>{
    return this.http.get(`https://mean-stack-aon.herokuapp.com/api/getBookById/${id}`, { headers: this.httpHeaders }).pipe(map((res) => {
      return res || {}
    }),
    catchError(this.handleError)
    );
  }

  // Update book
  updateBook(id: any, data: any): Observable<any>{
    return this.http.put(`https://mean-stack-aon.herokuapp.com/api/updateBook/${id}`, data, { headers: this.httpHeaders }).pipe(catchError(this.handleError));
  }

  // Delete Book
  deleteBook(id: any): Observable<any> {
    return this.http.delete(`https://mean-stack-aon.herokuapp.com/api/deleteBook/${id}`, {headers: this.httpHeaders}).pipe(catchError(this.handleError));
  }

}
