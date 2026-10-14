import { httpResource } from '@angular/common/http';
import { computed, DOCUMENT, effect, inject, linkedSignal, Service, signal } from '@angular/core';

export const LANGUAGES = ['en', 'uk'] as const;
export type Language = (typeof LANGUAGES)[number];

type Translations = { [key: string]: string | Translations };
type TranslationParams = Record<string, string | number>;

const DEFAULT_LANGUAGE: Language = LANGUAGES[0];
const STORAGE_KEY = 'lang';

function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

@Service()
export class TranslationService {
  private readonly document = inject(DOCUMENT);

  readonly language = signal<Language>(this.initialLanguage());

  private readonly translations = httpResource<Translations>(
    () => `assets/i18n/${this.language()}.json`,
  );

  // Keeps the previous dictionary while another language loads, so the UI doesn't flash raw keys.
  private readonly dictionary = linkedSignal<Translations | undefined, Translations | undefined>({
    source: () => (this.translations.hasValue() ? this.translations.value() : undefined),
    computation: (next, previous) => next ?? previous?.value,
  });

  readonly ready = computed(() => this.dictionary() !== undefined);
  readonly error = this.translations.error;

  constructor() {
    effect(() => {
      const language = this.language();
      this.document.documentElement.lang = language;
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Storage may be unavailable (private mode, SSR); the choice just won't persist.
      }
    });
  }

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  /** Resolves a dot-separated key, e.g. `pages.home.title`. Falls back to the key itself. */
  translate(key: string, params?: TranslationParams): string {
    console.log(key);

    return "TEST";
    
    // const value = key.split('.').reduce<string | Translations | undefined>(
    //     (node, part) => node[part] : undefined),
    //     this.dictionary(),
    //   );

    // if (typeof value !== 'string') {
    //   return key;
    // }

    // return params
    //   ? value.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, name: string) =>
    //       name in params ? String(params[name]) : match,
    //     )
    //   : value;
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
