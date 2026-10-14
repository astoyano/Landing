import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-not-found',
  imports: [TranslatePipe],
  template: `<h1>{{ 'pages.notFound.title' | translate }}</h1>`,
})
export class NotFound {}
