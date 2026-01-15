import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDemo } from './form/form.component';
import { SearchDemo } from './search/search.component';
import { NavigationComponent } from './navigation/nagivation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, SearchDemo, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo-taiga');
}
