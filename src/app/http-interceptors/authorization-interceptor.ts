import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  public constructor(private adalService: MsAdalAngular6Service) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get api url from adal config
    const resource = this.adalService.GetResourceForEndpoint(req.url);
    if (!resource || !this.adalService.isAuthenticated) {
      return next.handle(req);
    }

    // merge the bearer token into the existing headers
    return this.adalService.acquireToken(req.url).pipe(
      mergeMap((token: string) => {
        const authorizedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(authorizedRequest);
      }));
  }
}
