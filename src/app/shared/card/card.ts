import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly imageSrc = input.required<string>();
  /** Leave empty for decorative illustrations that the title already describes. */
  readonly imageAlt = input('');
}
