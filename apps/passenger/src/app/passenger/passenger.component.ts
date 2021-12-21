import { Component } from '@angular/core';
import { AuthLibService, User } from '@flight-workspace/shared/auth-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'flight-workspace-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
})
export class PassengerComponent {
  public user$: Observable<User>;

  get userName(): string {
    return this.authService.user ?? '';
  }

  constructor(public authService: AuthLibService) {
    this.user$ = this.authService.user$;
  }
}
