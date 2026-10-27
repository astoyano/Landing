import { Component } from '@angular/core';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { About } from './sections/about';
import { Expertise } from './sections/expertise';
import { Hero } from './sections/hero';
import { Process } from './sections/process';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Expertise, Process, CtaBanner],
  templateUrl: './home.html',
})
export class Home {}
