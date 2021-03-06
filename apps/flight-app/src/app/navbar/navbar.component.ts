import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private sidebarVisible = false;
  constructor(private translate: TranslateService) {
  }

  setLang(lang: string): void {
    this.translate.use(lang);
  }

  sidebarToggle() {
    const body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible === false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
