import { Component } from '@angular/core';
import { LoggerService } from '@flight-workspace/shared-logger';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';

  constructor(
    private loggerService: LoggerService,
    private authService: AuthLibService,
    private translate: TranslateService
  ) {
    this.loggerService.log('log');
    this.loggerService.debug('debug');


    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
