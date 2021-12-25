import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { appVariables } from '../app.constants';

@Injectable()
export class ContentTypeInterceptor implements HttpInterceptor {

  public constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const contentType = req.headers.get('Content-Type');
    // let clonedRequest: HttpRequest<any>;

    // Clone the request and set the new header.
    if (contentType) {
      req = req.clone({headers: req.headers.set('Content-Type', contentType)});
      // clonedRequest = req.clone({
      //   setHeaders: {client_id: clientId, client_secret: clientSecret, 'Content-Type': contentType}
      // });
    } else {
      req = req.clone({headers: req.headers.set('Content-Type', appVariables.defaultContentTypeHeader)});
    }

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}
