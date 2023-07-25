import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/serivices/hero.service';
import { trigger, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('enter', [
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
      ]),
      transition('* => void', [
        style({
          opacity: 1,
        }),
        animate(
          250,
          style({
            opacity: 0,
            transform: 'translateY(50%)',
          })
        ),
      ]),
    ]),
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  loading: boolean = true;

  constructor(private heroService: HeroService) {}

  /**
   * Get the heroes
   */
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.loading = false;
  }

  /**
   * Init method
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Add a hero to the database
   * @param heroName Name of the hero to be created
   */
  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }
    this.heroService.addHero({ name: heroName } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  /**
   * Deleted the hero
   * @param hero Hero to be deleted
   */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
