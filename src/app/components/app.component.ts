import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { appVariables } from '../app.constants';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  template: `
    <app-switch-groups *ngIf="loadSwitchUserGroup" (userGroup)="authenticateUser($event.isTM, $event.email)"></app-switch-groups>
    <router-outlet *ngIf="!loadSwitchUserGroup"></router-outlet>`
})
export class AppComponent implements OnInit {

  loadSwitchUserGroup = false;

  constructor(public adalService: MsAdalAngular6Service, private authService: AuthService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['']);

    if (this.adalService.isAuthenticated && !this.userService.isAuthenticatingUser) {
      if ((environment.env === 'qa' || environment.env === 'dev') && _.includes(appVariables.adminDevGroup, this.adalService.LoggedInUserEmail)) {
        this.loadSwitchUserGroup = true;
      } else {
        this.authenticateUser(false);
      }
    }
  }

  authenticateUser(customSwitch: boolean, customSwitchEmail?: string): void {
    let logInEmailAs = '';
    if (customSwitch) {
      logInEmailAs = customSwitchEmail;
    } else {
      logInEmailAs = this.adalService.LoggedInUserEmail;
    }
    this.loadSwitchUserGroup = false;
    this.authService.authenticateUser(logInEmailAs).subscribe(() => {
      if (this.userService.currentUserValue) {
        this.router.navigate([appVariables.landingPageUrl]);
      }
    });
  }
}
