import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientService } from '../http-client.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MsAdalAngular6Module, MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { UserService } from '../core/user.service';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { AuthService } from '../core/auth.service';

export function getAdalConfig() {
  return {
    tenant: 9021739074,
    clientId: environment.adalConfig.clientId,
    redirectUri: window.location.origin,
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage'
  };
}

describe('AppComponent', () => {
  let userService: UserService;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MsAdalAngular6Module.forRoot(getAdalConfig)
      ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClientService, HttpClient, HttpHandler, UserService, MsAdalAngular6Service],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    userService = TestBed.get(UserService);
    authService = TestBed.get(AuthService);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call the auth service for authentication', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(authService, 'authenticateUser').and.returnValue(of(''));
    spyOn(app.router, 'navigate').and.returnValue(true);
    (userService as any).currentUserSubject.next({
      email: 'abc.ecolab.com',
      isTerritoryManager: true,
      firstName: 'ABC',
      lastName: 'Mr',
      legacyCode: '00112',
      territoryCode: '019274',
      territoryName: 'Institutional',
      regionCode: 'NA',
      companyCode: '001',
      divisionCode: 'DIVONS',
      countryCode: 'US',
    });
    app.authenticateUser(false);

    expect(authService.authenticateUser).toHaveBeenCalled();
    expect(app.router.navigate).toHaveBeenCalledWith(['/orders']);
  }));

  xit(`should have as title 'Athena-Web-UI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Athena-Web-UI');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Athena-Web-UI!');
  });
});
