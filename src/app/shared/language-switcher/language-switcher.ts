import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Language, LANGUAGES, TranslationService } from '../../core/i18n/translation.service';

// Language names are shown in their own language, so they are not translated.
const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  uk: 'Українська',
};

@Component({
  selector: 'app-language-switcher',
  imports: [TranslatePipe],
  template: `
    <div role="group" [attr.aria-label]="'app.language.label' | translate">
      @for (language of languages; track language) {
        <button
          type="button"
          [attr.lang]="language"
          [attr.aria-pressed]="language === i18n.language"
          (click)="i18n.setLanguage(language)"
        >
          {{ names[language] }}
        </button>
      }
    </div>
  `,
  styles: `
    div {
      display: flex;
      gap: 0.5rem;
    }

    button {
      padding: 0.25rem 0.75rem;
      border: 1px solid var(--mat-sys-outline);
      border-radius: 999px;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

    button[aria-pressed='true'] {
      background: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
      border-color: var(--mat-sys-primary);
    }

    button:focus-visible {
      outline: 2px solid var(--mat-sys-primary);
      outline-offset: 2px;
    }
  `,
})
export class LanguageSwitcher {
  protected readonly i18n = inject(TranslationService);
  protected readonly languages = LANGUAGES;
  protected readonly names = LANGUAGE_NAMES;
}
