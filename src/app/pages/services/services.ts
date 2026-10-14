import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe],
  template: `<h1>{{ 'pages.services.title' | translate }}</h1>`,
})
export class Services {}
