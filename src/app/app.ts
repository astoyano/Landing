import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from './core/i18n/translate.pipe';
import { Footer } from './shared/footer/footer';
import { LanguageSwitcher } from './shared/language-switcher/language-switcher';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcher, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly navItems = [
    { path: '/', label: 'app.nav.home', exact: true },
    { path: '/services', label: 'app.nav.services', exact: false },
    { path: '/contacts', label: 'app.nav.contacts', exact: false },
  ];

  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  // A plain `#main` href would resolve against <base href="/"> and navigate home.
  protected skipToMain(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }
}
