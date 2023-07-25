import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/serivices/hero.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [
    trigger('details', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)',
        }),
        animate(
          250,
          style({
            opacity: 1,
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  /**
   * Init method
   */
  ngOnInit(): void {
    this.getHero();
  }

  /**
   * Get the hero
   */
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  /**
   * Save the changes
   */
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  /**
   * Return to the previous page
   */
  goBack(): void {
    this.location.back();
  }
}
