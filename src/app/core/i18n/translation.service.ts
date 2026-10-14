import { HttpClient } from '@angular/common/http';
import { DOCUMENT, inject, provideAppInitializer, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const LANGUAGES = ['en', 'uk'] as const;
export type Language = (typeof LANGUAGES)[number];

type Translations = Record<string, string>;
type TranslationParams = Record<string, string | number>;

const DEFAULT_LANGUAGE: Language = LANGUAGES[0];
const STORAGE_KEY = 'lang';

function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

/**
 * Static localization: the dictionary is loaded once before the app renders
 * (see `provideTranslations`), and changing the language reloads the page.
 */
@Service()
export class TranslationService {
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);

  readonly language = this.initialLanguage();

  private translations: Translations = {};

  async load(): Promise<void> {
    this.document.documentElement.lang = this.language;
    try {
      this.translations = await firstValueFrom(
        this.http.get<Translations>(`assets/i18n/${this.language}.json`),
      );
    } catch (error) {
      // Render with raw keys rather than blocking the whole app.
      console.error(`Failed to load translations for "${this.language}"`, error);
    }
  }

  setLanguage(language: Language): void {
    if (language === this.language) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage may be unavailable (private mode); the choice just won't persist.
    }
    this.document.location.reload();
  }

  /** Looks up a translation by its full key, e.g. `pages.home.title`. Falls back to the key itself. */
  translate(key: string): string {
    return this.translations[key] ?? key;
  }

  private initialLanguage(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored)) {
        return stored;
      }
    } catch {
      // Ignore unavailable storage.
    }

    const browser = this.document.defaultView?.navigator.language.slice(0, 2);
    return isLanguage(browser) ? browser : DEFAULT_LANGUAGE;
  }
}

export function provideTranslations() {
  return provideAppInitializer(() => inject(TranslationService).load());
}
