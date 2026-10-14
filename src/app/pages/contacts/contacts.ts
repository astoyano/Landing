import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe],
  template: `<h1>{{ 'pages.contacts.title' | translate }}</h1>`,
})
export class Contacts {}
