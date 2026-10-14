import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe],
  templateUrl: './contacts.html',
  styles: `
    address {
      font-style: normal;
    }

    dl {
      display: grid;
      gap: 1rem;
      margin: 0;
    }

    dt {
      font: var(--mat-sys-title-small);
      color: var(--mat-sys-on-surface-variant);
    }

    dd {
      margin: 0.25rem 0 0;
    }

    a {
      color: var(--mat-sys-primary);
    }

    a:focus-visible {
      outline: 2px solid var(--mat-sys-primary);
      outline-offset: 2px;
    }
  `,
})
export class Contacts {
  protected readonly contacts = {
  email: 'info@example.com',
  phone: { display: '+380 00 000 00 00', href: 'tel:+380000000000' },
};
}
