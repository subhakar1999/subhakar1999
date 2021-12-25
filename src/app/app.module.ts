import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';

import { HttpClientService } from './http-client.service';
import { httpInterceptorProviders } from './http-interceptors';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { SwitchGroupsComponent } from './components/switch-groups/switch-groups.component';

export function getAdalConfig() {
  return {
    tenant: environment.adalConfig.tenant,
    clientId: environment.adalConfig.clientId,
    endpoints: environment.adalConfig.endpoints,
    redirectUri: window.location.origin,
    navigateToLoginRequestUrl: false,
    cacheLocation: 'sessionStorage'
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SwitchGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (handler: HttpBackend) => new TranslateHttpLoader(new HttpClient(handler), './assets/i18n/', '.json'),
        deps: [HttpBackend]
      }
    }),
    MsAdalAngular6Module.forRoot(getAdalConfig)
  ],
  providers: [
    httpInterceptorProviders,
    { provide: HttpClientService, useFactory: (http: HttpClient, router: Router) => new HttpClientService(http, router), deps: [HttpClient, Router] },
    AuthenticationGuard
  ],
  bootstrap: [AppComponent],
  exports: [ CommonModule,
    FormsModule ]
})
export class AppModule { }
