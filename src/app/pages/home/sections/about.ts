import { Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  template: `
    <section class="section" aria-labelledby="about-title">
      <div class="container about">
        <div>
          <p class="eyebrow">{{ 'pages.home.about.eyebrow' | translate }}</p>
          <h2 id="about-title" class="section-title">{{ 'pages.home.about.title' | translate }}</h2>
          @for (paragraph of paragraphs; track paragraph) {
            <p>{{ paragraph | translate }}</p>
          }
        </div>

        <ul class="highlights">
          @for (item of highlights; track item.title) {
            <li>
              <h3>{{ item.title | translate }}</h3>
              <p>{{ item.text | translate }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .about {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
      gap: 3rem;
      align-items: start;
    }

    p {
      color: var(--brand-muted);
    }

    .highlights {
      display: grid;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 1.25rem 1.5rem;
      border-left: 4px solid var(--brand-orange);
      border-radius: 0 16px 16px 0;
      background: var(--brand-blue-50);
    }

    h3 {
      margin: 0 0 0.25rem;
      font-size: 1.15rem;
      font-weight: 500;
      color: var(--brand-blue-950);
    }

    li p {
      margin: 0;
    }
  `,
})
export class About {
  protected readonly paragraphs = ['profile.bio.p1', 'profile.bio.p2'];

  protected readonly highlights = [
    { title: 'profile.highlights.1.title', text: 'profile.highlights.1.text' },
    { title: 'profile.highlights.2.title', text: 'profile.highlights.2.text' },
    { title: 'profile.highlights.3.title', text: 'profile.highlights.3.text' },
  ];
}
