import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

/**
 * Impure so it re-runs when the dictionary signal changes; the lookup itself is cheap,
 * and the template only re-renders when signals it reads have changed.
 */
@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(key: string, params?: Record<string, string | number>): string {
    return this.i18n.translate(key, params);
  }
}
