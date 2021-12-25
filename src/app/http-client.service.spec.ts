import { TestBed, inject } from '@angular/core/testing';
import { HttpClientService } from './http-client.service';
import { MockDataService } from './test/mock-data.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {observable, of, throwError} from 'rxjs/index';
import { Router } from '@angular/router';
import { appVariables } from './app.constants';

describe('HttpClientService', () => {
  let mockDataService: MockDataService;
  let router: Router;
  let http: HttpClient;

  beforeEach(() => {
    mockDataService = new MockDataService();
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })
      ],
      providers: [ HttpClientService,
        {provide: Router,
          useClass: class {
            private navigate = jasmine.createSpy('navigate');
          }}]
    });
    router = TestBed.get(Router);
    http = TestBed.get(HttpClient);
  });

  it('should be created', inject([HttpClientService], (service: HttpClientService) => {
    expect(service).toBeTruthy();
  }));

  it('get() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    spyOn(http, 'get').and.returnValue(of('Success'));
    service.get<string>('http://test-api/accounts').subscribe((res: string) => {
      expect(res).toBeDefined();
    });
  }));

  it('post() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    spyOn(http, 'get').and.returnValue(of('Success'));
    service.post<string>('http://test-api/accounts', {}).subscribe((res: string) => {
      expect(res).toBeDefined();
    });
  }));

  it('post() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    spyOn(http, 'get').and.returnValue(throwError('Error'));
    service.post<string>('http://test-api/accounts', {}).subscribe((res: string) => {
      expect(res).toBeDefined();
    });
  }));

  it('put() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    spyOn(http, 'get').and.returnValue(of('Success'));
    service.put<string>('http://test-api/accounts', {}).subscribe((res: string) => {
      expect(res).toEqual('Success');
    });
  }));

  it('delete() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    spyOn(http, 'get').and.returnValue(of('Successfully deleted'));
    service.delete<string>('http://test-api/accounts').subscribe((res: string) => {
      expect(res).toEqual('Successfully deleted');
    });
  }));

  it('formUrlParam() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    const urlQueryString: any = service.formUrlParam('http://test-api', {orderNumber: 38247, customerName: 'Narayan'});

    expect(urlQueryString).toEqual('http://test-api?orderNumber=38247&customerName=Narayan');
  }));

  it('handleErrorResponse() - HttpClientService', inject([HttpClientService], (service: HttpClientService) => {
    const error = {status: 401, statusText: 'Unauthorized'};
    // spyOn(router, 'navigate').and.callThrough();
    service.handleErrorResponse(new HttpErrorResponse(error));

    expect(router.navigate).toHaveBeenCalledWith([appVariables.unauthorizedPageUrl]);
  }));
});
