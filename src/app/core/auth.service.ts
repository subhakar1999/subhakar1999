import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpClientService, IRequestOptions } from '../http-client.service';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { appVariables } from '../app.constants';
import { IUser, IUserAlignmetFromAPI } from './interfaces/app.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly restApiURL: string;

  constructor(private adalService: MsAdalAngular6Service, private httpClientService: HttpClientService, private userService: UserService) {
    this.restApiURL = environment.apiHost;
  }

  authenticateUser(loggedInEmail: string): Observable<IUser> {
    if (!this.userService.currentUserSubject.value) {
      this.userService.isAuthenticatingUser = true;

      return this.httpClientService.get<IUserAlignmetFromAPI>(`${this.restApiURL}/exp/datalake/api/v1/territory/${loggedInEmail}`).pipe(
        map(
          (response: IUserAlignmetFromAPI) => {
            const userDetails: IUser = this.covertUserAlignmentFromAPI(loggedInEmail, response);
            this.userService.isAuthenticatingUser = false;
            this.userService.currentUserSubject.next(userDetails);
            return userDetails;
          },
          catchError((err: any) => {
            return throwError(err);
          })
        ));
    } else {
      return this.userService.currentUser;
    }
  }

  private covertUserAlignmentFromAPI(loggedInEmail: string, response: IUserAlignmetFromAPI): IUser {
    const userDetails = {} as IUser;
    userDetails.email = loggedInEmail;

    if (response.territory) {
      userDetails.isTerritoryManager = true;
      userDetails.firstName = response.territory.firstname;
      userDetails.lastName = response.territory.lastname || null;
      userDetails.legacyCode = response.territory.legacycode;
      userDetails.territoryCode = response.territory.territorycode;
      userDetails.territoryName = response.territory.territoryname;
      userDetails.regionCode = response.territory.regioncode;
      userDetails.companyCode = response.territory.companycode;
      userDetails.divisionCode = response.territory.divisioncode;
      userDetails.countryCode = response.territory.countrycode;
    } else {
      userDetails.isTerritoryManager = false;
    }

    return userDetails;
  }
}
