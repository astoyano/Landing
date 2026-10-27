import { Component } from '@angular/core';
import { PROFILE } from '../../core/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, SocialLinks],
  template: `
    <footer class="footer on-dark">
      <div class="container footer__inner">
        <div>
          <p class="footer__name">{{ 'profile.name' | translate }}</p>
          <p class="footer__role">{{ 'profile.role' | translate }}</p>
        </div>
        <a class="footer__email" [href]="'mailto:' + profile.email">{{ profile.email }}</a>
        <app-social-links />
      </div>
      <div class="container">
        <p class="footer__copy">{{ 'app.footer.copyright' | translate }}</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding-block: 2.5rem 1.5rem;
      background: var(--brand-blue-950);
      color: var(--brand-white);
    }

    .footer__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgb(255 255 255 / 20%);
    }

    p {
      margin: 0;
    }

    .footer__name {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .footer__role {
      color: var(--brand-orange-light);
    }

    .footer__email {
      color: var(--brand-white);
    }

    .footer__copy {
      padding-top: 1.5rem;
      font-size: 0.875rem;
      color: rgb(255 255 255 / 80%);
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
}
