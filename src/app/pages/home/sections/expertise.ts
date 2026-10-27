import { Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-expertise',
  imports: [TranslatePipe],
  template: `
    <section class="section section--tinted" aria-labelledby="expertise-title">
      <div class="container">
        <p class="eyebrow">{{ 'pages.home.expertise.eyebrow' | translate }}</p>
        <h2 id="expertise-title" class="section-title">
          {{ 'pages.home.expertise.title' | translate }}
        </h2>
        <p class="section-lead">{{ 'pages.home.expertise.lead' | translate }}</p>

        <div class="grid">
          @for (area of areas; track area.id) {
            <article class="area" [class]="'area--' + area.id">
              <span class="material-symbols-outlined icon" aria-hidden="true">{{ area.icon }}</span>
              <h3>{{ area.title | translate }}</h3>
              <p>{{ area.text | translate }}</p>
              <ul>
                @for (skill of area.skills; track skill) {
                  <li>{{ skill | translate }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
      gap: 1.5rem;
    }

    .area {
      padding: 2rem;
      border-top: 6px solid var(--brand-blue-700);
      border-radius: 20px;
      background: var(--brand-white);
      box-shadow: 0 10px 30px rgb(23 37 84 / 8%);
    }

    .area--development {
      border-top-color: var(--brand-orange);
    }

    .icon {
      display: grid;
      place-items: center;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 16px;
      background: var(--brand-blue-100);
      color: var(--brand-blue-800);
      font-size: 2rem;
    }

    .area--development .icon {
      background: #ffedd5;
      color: var(--brand-orange-text);
    }

    h3 {
      margin: 1.25rem 0 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--brand-blue-950);
    }

    p {
      margin: 0 0 1.25rem;
      color: var(--brand-muted);
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 0.35rem 0.85rem;
      border-radius: 999px;
      background: var(--brand-blue-50);
      color: var(--brand-blue-950);
      font-size: 0.9rem;
    }
  `,
})
export class Expertise {
  protected readonly areas = [
    {
      id: 'marketing',
      icon: 'campaign',
      title: 'pages.home.expertise.marketing.title',
      text: 'pages.home.expertise.marketing.text',
      skills: [1, 2, 3, 4, 5, 6].map((n) => `pages.home.expertise.marketing.skill${n}`),
    },
    {
      id: 'development',
      icon: 'code',
      title: 'pages.home.expertise.development.title',
      text: 'pages.home.expertise.development.text',
      skills: [1, 2, 3, 4, 5, 6].map((n) => `pages.home.expertise.development.skill${n}`),
    },
  ];
}
