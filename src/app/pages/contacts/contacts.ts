import { Component } from '@angular/core';
import { PROFILE } from '../../core/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe, SocialLinks],
  templateUrl: './contacts.html',
  styles: `
    .layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
      gap: 3rem;
      align-items: start;
    }

    .socials-title {
      margin: 2.5rem 0 1rem;
      font-size: 1.15rem;
      font-weight: 500;
      color: var(--brand-blue-950);
    }

    .socials {
      color: var(--brand-blue-800);
    }

    .details {
      padding: 2rem;
      border-top: 6px solid var(--brand-orange);
      border-radius: 20px;
      background: var(--brand-blue-50);
      font-style: normal;
    }

    dl {
      display: grid;
      gap: 1.5rem;
      margin: 0;
    }

    dt {
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--brand-muted);
    }

    dd {
      margin: 0.25rem 0 0;
      font-size: 1.1rem;
    }

    dd a {
      color: var(--brand-blue-700);
    }
  `,
})
export class Contacts {
  protected readonly profile = PROFILE;
}
