import { Component } from '@angular/core';
import { PROFILE } from '../../core/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-social-links',
  imports: [TranslatePipe],
  template: `
    <ul [attr.aria-label]="'app.socials.label' | translate">
      @for (social of socials; track social.id) {
        <li>
          <a [href]="social.href" target="_blank" rel="noopener noreferrer">
            {{ social.label }}
            <span class="visually-hidden">{{ 'app.socials.newTab' | translate }}</span>
          </a>
        </li>
      }
    </ul>
  `,
  styles: `
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    a {
      display: inline-flex;
      align-items: center;
      min-height: 40px;
      padding: 0 1rem;
      border: 1px solid currentColor;
      border-radius: 999px;
      color: inherit;
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition:
        background-color 0.2s,
        color 0.2s;
    }

    a:hover {
      background: var(--brand-orange);
      border-color: var(--brand-orange);
      color: var(--brand-ink);
    }
  `,
})
export class SocialLinks {
  protected readonly socials = PROFILE.socials;
}
