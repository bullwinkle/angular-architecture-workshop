import { Component, ViewEncapsulation } from '@angular/core';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  expertMode = false;
  needsLogin$: Observable<boolean>;

  get userName(): string {
    return this.authService.user ?? '';
  }

  constructor(public authService: AuthLibService) {
    this.needsLogin$ = this.authService.user$.pipe(map((it) => !it));
  }

  changed($event: CustomEvent): void {
    window.console.debug('$event.detail ', $event.detail);

    this.expertMode = $event.detail;
  }

  login(): void {
    this.authService.login('DummyUser', '1234');
  }

  logout(): void {
    this.authService.logout();
  }
}
