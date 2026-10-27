import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../../core/profile';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  template: `
    <section class="hero on-dark" aria-labelledby="hero-title">
      <div class="container hero__inner">
        <div>
          <p class="eyebrow">{{ 'pages.home.hero.eyebrow' | translate }}</p>
          <h1 id="hero-title">{{ 'profile.name' | translate }}</h1>
          <p class="role">{{ 'profile.role' | translate }}</p>
          <p class="lead">{{ 'profile.tagline' | translate }}</p>
          <div class="actions">
            <a class="btn btn--accent" routerLink="/contacts">
              {{ 'pages.home.hero.contact' | translate }}
            </a>
            <a class="btn btn--ghost" routerLink="/services">
              {{ 'pages.home.hero.services' | translate }}
            </a>
          </div>
        </div>

        <div class="photo">
          <img
            [ngSrc]="profile.photo"
            width="400"
            height="400"
            priority
            [alt]="'profile.photoAlt' | translate"
          />
        </div>
      </div>

      <div class="container">
        <ul class="stats">
          @for (stat of profile.stats; track stat.label) {
            <li>
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label | translate }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .hero {
      padding-block: clamp(3rem, 8vw, 6rem) 2.5rem;
      background:
        radial-gradient(circle at 85% 20%, rgb(249 115 22 / 30%), transparent 40%),
        linear-gradient(135deg, var(--brand-blue-950), var(--brand-blue-800));
      color: var(--brand-white);
    }

    .hero__inner {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
      align-items: center;
      gap: 3rem;
    }

    h1 {
      margin: 0;
      font-size: clamp(2.5rem, 7vw, 4rem);
      font-weight: 500;
    }

    .role {
      margin: 0.5rem 0 1.5rem;
      font-size: clamp(1.15rem, 2.5vw, 1.5rem);
      color: var(--brand-orange-light);
    }

    .lead {
      max-width: 52ch;
      margin: 0 0 2rem;
      color: rgb(255 255 255 / 90%);
    }

    .photo {
      justify-self: center;
      width: min(100%, 360px);
      padding: 10px;
      border-radius: 50%;
      background: conic-gradient(var(--brand-orange) 0 35%, rgb(255 255 255 / 25%) 0);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      border: 6px solid var(--brand-blue-950);
      box-sizing: border-box;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
      margin: 3.5rem 0 0;
      padding: 1.5rem 0 0;
      border-top: 1px solid rgb(255 255 255 / 20%);
      list-style: none;
    }

    li {
      display: grid;
      gap: 0.25rem;
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
      color: var(--brand-orange-light);
    }

    @media (max-width: 768px) {
      .hero__inner {
        grid-template-columns: 1fr;
      }

      .photo {
        grid-row: 1;
        width: min(70%, 260px);
      }
    }
  `,
})
export class Hero {
  protected readonly profile = PROFILE;
}
