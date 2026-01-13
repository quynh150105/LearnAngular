import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './helloworld-component/helloworld-component';
import { Parent } from './parent/parent-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Parent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo-project');
}
