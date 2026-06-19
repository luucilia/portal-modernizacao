import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Roadmap } from './pages/roadmap/roadmap';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'roadmap',
    component: Roadmap
  }
];