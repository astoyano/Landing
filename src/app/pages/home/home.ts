import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  template: `<h1>{{ 'pages.home.title' | translate }}</h1>`,
})
export class Home {}
