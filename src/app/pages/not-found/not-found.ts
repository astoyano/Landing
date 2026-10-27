import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './not-found.html',
  styles: `
    .not-found {
      text-align: center;
    }

    .code {
      margin: 0;
      font-size: clamp(5rem, 18vw, 9rem);
      font-weight: 500;
      line-height: 1;
      color: var(--brand-blue-700);
      text-shadow: 6px 6px 0 var(--brand-orange);
    }

    .section-lead {
      margin-inline: auto;
    }
  `,
})
export class NotFound {}
