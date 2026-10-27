import { Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-process',
  imports: [TranslatePipe],
  template: `
    <section class="section" aria-labelledby="process-title">
      <div class="container">
        <p class="eyebrow">{{ 'pages.home.process.eyebrow' | translate }}</p>
        <h2 id="process-title" class="section-title">{{ 'pages.home.process.title' | translate }}</h2>
        <p class="section-lead">{{ 'pages.home.process.lead' | translate }}</p>

        <ol>
          @for (step of steps; track step; let i = $index) {
            <li>
              <span class="number" aria-hidden="true">{{ i + 1 }}</span>
              <h3>{{ step + '.title' | translate }}</h3>
              <p>{{ step + '.text' | translate }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    ol {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 1.5rem;
      border: 1px solid var(--brand-blue-100);
      border-radius: 20px;
    }

    .number {
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
      background: var(--brand-orange);
      color: var(--brand-ink);
      font-weight: 500;
      font-size: 1.15rem;
    }

    h3 {
      margin: 1rem 0 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--brand-blue-950);
    }

    p {
      margin: 0;
      color: var(--brand-muted);
    }
  `,
})
export class Process {
  protected readonly steps = [1, 2, 3, 4].map((n) => `pages.home.process.step${n}`);
}
