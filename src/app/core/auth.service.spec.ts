import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { HttpClientService } from '../http-client.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from './user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../test/mock-data.service';
import { of } from 'rxjs';

export function getAdalConfig() {
  return {
    tenant: 9021739074,
    clientId: environment.adalConfig.clientId,
    redirectUri: window.location.origin,
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage'
  };
}

describe('AuthService', () => {
  let userService: UserService;
  let httClientService: HttpClientService;
  const mockDataService: MockDataService = new MockDataService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MsAdalAngular6Module.forRoot(getAdalConfig)],
      providers: [HttpClientService, HttpClient, HttpHandler, UserService]
    });
    userService = TestBed.get(UserService);
    httClientService = TestBed.get(HttpClientService);
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should authenticate the user by using sales alignment call -- Field Rep', inject([AuthService], (service: AuthService) => {
    spyOn(httClientService, 'get').and.returnValue(of(mockDataService.getSalesAlignmentForFRFromAPI));
    service.authenticateUser('narayan.chittajallu@ecolab.com').subscribe((res: any) => {
      expect(userService.isAuthenticatingUser).toBeFalsy();
      expect(userService.currentUserValue.isTerritoryManager).toBeTruthy();
      expect(userService.currentUserValue.firstName).toEqual('LUKAS');
    });
  }));

  it('should authenticate the user by using sales alignment call -- Cus Rep', inject([AuthService], (service: AuthService) => {
    spyOn(httClientService, 'get').and.returnValue(of(mockDataService.getSalesAlignmentForCSRFromAPI));
    service.authenticateUser('narayan.chittajallu@ecolab.com').subscribe((res: any) => {
      expect(userService.isAuthenticatingUser).toBeFalsy();
      expect(userService.currentUserValue.isTerritoryManager).toBeFalsy();
    });
  }));
});
