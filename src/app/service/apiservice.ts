import { Injectable } from '@angular/core';
import { catchError ,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

REST_API: string = 'http://localhost:3000/providers';


httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient  ) { }

  // Add Provider
    AddProvider(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all Providers
  GetProviders() {
    return this.httpClient.get(`${this.REST_API}/details`);
  }

  // Get single object
  GetProvider(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/detailsId/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  
  // Update Provider
  updateProvider(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-provider/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete Provider
  deleteProvider(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-provider/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}