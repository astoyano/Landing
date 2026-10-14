import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    localStorage.setItem('lang', 'en');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)],
    }).compileComponents();
  });

  it('should render translated navigation once translations load', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    TestBed.inject(HttpTestingController)
      .expectOne('assets/i18n/en.json')
      .flush({ app: { nav: { home: 'Home', services: 'Services', contacts: 'Contacts' } } });
    await fixture.whenStable();

    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('nav a');
    expect([...links].map((a) => a.textContent?.trim())).toEqual(['Home', 'Services', 'Contacts']);
  });
});
