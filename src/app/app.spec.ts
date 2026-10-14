import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { TranslationService } from './core/i18n/translation.service';

describe('App', () => {
  beforeEach(async () => {
    localStorage.setItem('lang', 'en');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)],
    }).compileComponents();

    const loaded = TestBed.inject(TranslationService).load();
    TestBed.inject(HttpTestingController)
      .expectOne('assets/i18n/en.json')
      .flush({ 'app.nav.home': 'Home', 'app.nav.services': 'Services', 'app.nav.contacts': 'Contacts' });
    await loaded;
  });

  it('should render translated navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('nav a');
    expect([...links].map((a) => a.textContent?.trim())).toEqual(['Home', 'Services', 'Contacts']);
  });
});
