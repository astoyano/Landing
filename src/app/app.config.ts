import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { TranslatedTitleStrategy } from './core/i18n/translated-title.strategy';
import { provideTranslations } from './core/i18n/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideTranslations(),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: TranslatedTitleStrategy },
  ],
};
