import { Component } from '@angular/core';
import { HEROES } from './hero';
import { NgFor } from '@angular/common';
import { HeroChildComponent } from './hero-child.component';

@Component({
  standalone: true,
  selector: 'app-hero-parent',
  imports: [HeroChildComponent, NgFor],
  template: `
    <h2>{{ master }} controls {{ heroes.length }} heroes</h2>

    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master"></app-hero-child>
  `,
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
