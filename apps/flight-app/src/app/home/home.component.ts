/* eslint-disable no-restricted-syntax */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  expertMode = false;
  needsLogin$: Observable<boolean> | undefined;

  get userName(): string {
    return this.authService.user ?? '';
  }

  constructor(private route: ActivatedRoute, public authService: AuthLibService) {
  }

  ngOnInit() {
    this.needsLogin$ = this.authService.user$.pipe(map((it) => !it));
  }

  changed($event: CustomEvent): void {
    console.debug('$event.detail ', $event.detail);

    this.expertMode = $event.detail;
  }

  login(): void {
    this.authService.login('max', '');
  }

  logout(): void {
    this.authService.logout();
  }
}
