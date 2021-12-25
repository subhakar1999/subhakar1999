import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { appVariables } from './app.constants';
import { Router } from '@angular/router';

export interface IRequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable()
export class HttpClientService {

  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient, private router: Router) {
    // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
    // for ex. this.httpClient.http.get(...)
  }

  /**
   * GET request
   * @param string endPoint it doesn't need / in front of the end point
   * @param IRequestOptions options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public get<T>(url: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => this.handleErrorResponse(error)));
  }

  /**
   * POST request
   * @param string endPoint end point of the api
   * @param Object params body of the request.
   * @param IRequestOptions options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public post<T>(url: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(url, params, options).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => this.handleErrorResponse(error)));
  }

  /**
   * PUT request
   * @param string endPoint end point of the api
   * @param Object params body of the request.
   * @param IRequestOptions options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public put<T>(url: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(url, params, options).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => this.handleErrorResponse(error)));
  }

  /**
   * DELETE request
   * @param string endPoint end point of the api
   * @param IRequestOptions options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public delete<T>(url: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(url, options).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => this.handleErrorResponse(error)));
  }

  formUrlParam(url: string, data: {[key: string]: any}): string {
    let queryString = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }

  handleErrorResponse(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0 || error.status === 401 || error.status === 403 || error.status === 404 ) {
      this.router.navigate([appVariables.unauthorizedPageUrl]);
    }
    return throwError(error);
  }
}
