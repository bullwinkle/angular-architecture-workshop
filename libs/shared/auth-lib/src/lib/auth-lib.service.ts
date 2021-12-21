import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {
  public user$: Observable<User> = defer(() => this.userSubject$.asObservable());

  private userSubject$: BehaviorSubject<User> = new BehaviorSubject(null as User);

  public get user(): User {
    return this.userSubject$.getValue();
  }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userSubject$.next(userName);
  }

  public logout(): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userSubject$.next(null);
  }
}
