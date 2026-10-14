import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from './core/i18n/translate.pipe';
import { TranslationService } from './core/i18n/translation.service';
import { LanguageSwitcher } from './shared/language-switcher/language-switcher';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcher],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(TranslationService);

  protected readonly navItems = [
    { path: '/', label: 'app.nav.home', exact: true },
    { path: '/services', label: 'app.nav.services', exact: false },
    { path: '/contacts', label: 'app.nav.contacts', exact: false },
  ];
}
