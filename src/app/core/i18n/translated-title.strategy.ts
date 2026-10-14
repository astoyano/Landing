import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslationService } from './translation.service';

/** Treats route `title` values as translation keys. */
@Injectable()
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly i18n = inject(TranslationService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const key = this.buildTitle(snapshot);
    const appName = this.i18n.translate('app.name');
    this.title.setTitle(key ? `${this.i18n.translate(key)} | ${appName}` : appName);
  }
}
