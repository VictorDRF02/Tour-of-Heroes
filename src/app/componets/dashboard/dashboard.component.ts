import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../serivices/hero.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('showHeroes', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-50%)',
        }),
        animate(
          250,
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ])
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  /**
   * Init method
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Get the heroes to the list
   */
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
