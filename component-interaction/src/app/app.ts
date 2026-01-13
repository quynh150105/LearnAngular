import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroParentComponent } from './hero-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('component-interaction');
}
