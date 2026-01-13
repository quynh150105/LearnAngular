import { Routes } from '@angular/router';
import { HelloWorld } from './helloworld-component/helloworld-component';
import { App } from './app';
import { Parent } from './parent/parent-component';

export const routes: Routes = [
  { path: 'helloworld', component: HelloWorld },
  { path: '', component: Parent },
  { path: 'parent', component: Parent },
];
