import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './interfaces/app.interface';

@Injectable({ providedIn: 'root' })
export class UserService {

  public currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<any>;
  public isAuthenticatingUser = false;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<IUser>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }
}
