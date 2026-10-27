import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="section" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta on-dark">
          <div>
            <h2 id="cta-title">{{ 'app.cta.title' | translate }}</h2>
            <p>{{ 'app.cta.text' | translate }}</p>
          </div>
          <a class="btn btn--accent" routerLink="/contacts">{{ 'app.cta.button' | translate }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .cta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding: clamp(2rem, 5vw, 3rem);
      border-radius: 24px;
      background:
        radial-gradient(circle at 100% 0, rgb(249 115 22 / 35%), transparent 45%),
        linear-gradient(135deg, var(--brand-blue-950), var(--brand-blue-800));
      color: var(--brand-white);
    }

    h2 {
      margin: 0 0 0.5rem;
      font-size: clamp(1.5rem, 3.5vw, 2rem);
      font-weight: 500;
    }

    p {
      max-width: 50ch;
      margin: 0;
      color: rgb(255 255 255 / 90%);
    }
  `,
})
export class CtaBanner {}
