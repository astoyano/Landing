import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Card } from '../../shared/card/card';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe, Card, CtaBanner],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services = [
    {
      id: 'marketing',
      title: 'pages.services.marketing.title',
      description: 'pages.services.marketing.description',
      image: 'assets/images/services/marketing.svg',
    },
    {
      id: 'development',
      title: 'pages.services.development.title',
      description: 'pages.services.development.description',
      image: 'assets/images/services/development.svg',
    },
    {
      id: 'web-design',
      title: 'pages.services.webDesign.title',
      description: 'pages.services.webDesign.description',
      image: 'assets/images/services/web-design.svg',
    },
  ];
}
