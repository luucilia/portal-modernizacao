import { Component } from '@angular/core';

import { Hero } from '../../shared/hero/hero';
import { Pillars } from '../../shared/pillars/pillars';
import { Stats } from '../../shared/stats/stats';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Pillars,
    Stats
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}